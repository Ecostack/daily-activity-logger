import {Passport} from "passport";
import {UserModel} from "../models/UserModel";
import {UserService} from "./UserService";
import {Config} from "../server";

const LocalStrategy = require('passport-local').Strategy;

const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

export class PassportService {
    static initiateStrategies(passport: Passport) {
        passport.use('local', new LocalStrategy.Strategy(
            function (email, password, done) {
                UserModel
                    .findOne({email: email}).then(user => {
                    if (!user) {
                        return done(null, false)
                    }
                    if (!UserService
                        .validPassword(password, user.password)) {
                        return done(null, false, {message: 'Password is wrong.'})
                    }

                    return done(null, user);

                }).catch(err => {
                    if (err) {
                        return done(err)
                    }
                })

            }
        ));
        passport.serializeUser(function (user, done) {
            if (user) done(null, user.id);
        });

        passport.deserializeUser(function (id, done) {
            UserModel.findOne({id: id})
                .then(user => done(null, user))
                .catch(err => done(err, null));
        });

        passport.use(new JWTStrategy({
                jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
                secretOrKey: Config.JWT_TOKEN_SECRET
            },
            function (jwtPayload, cb) {
                return UserModel
                    .findOne({_id: jwtPayload.id})
                    .then(user => {
                        return cb(null, user);
                    })
                    .catch(err => {
                        return cb(err);
                    });
            }
        ));
    }
}

