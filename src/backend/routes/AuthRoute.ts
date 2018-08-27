import {RouterHelper} from "./RouterHelper";
import {UserModel} from "../models/UserModel";
import {isNotAuthenticated} from "../policies/isNotAuthenticated";
import {NextFunction} from "express";
import * as passport from "passport";
import * as jwt from 'jsonwebtoken';
import {Config} from "../server";
import {isAuthenticatedJWT} from "../policies/isAuthenticatedJWT";

export class AuthRoute {
    private static ROUTER_PREFIX = 'auth';

    public static create(router) {
        // GET /logout
        router.get(`/${AuthRoute.ROUTER_PREFIX}/logout`, isAuthenticatedJWT, function (req, res, next) {
            if (req.session) {
                // delete session object
                req.session.destroy(function (err) {
                    if (err) {
                        return next(err);
                    } else {
                        return res.redirect('/');
                    }
                });
            }
        });

        router.get(`/${AuthRoute.ROUTER_PREFIX}/loggedin`, isAuthenticatedJWT, (req: any, res: any, next: NextFunction) => {
            res.send(req.user);
        });

        router.post(`/${AuthRoute.ROUTER_PREFIX}/login`, (req: any, res: any, next: NextFunction) => {
            if (!req.body || !req.body.email || !req.body.password)
                return res.status(400).send({success: false});
            req.body.username = req.body.email;

            passport.authenticate('local', {session: false}, (err, user, info) => {
                if (err) {
                    return next(err);
                }
                if (!user) res.status(400).send({success: false});

                req.logIn(user, (err) => {
                    if (err || !user) {
                        return next(err);
                    }

                    const returnUser = {id: user.id};

                    const token = jwt.sign(returnUser, Config.JWT_TOKEN_SECRET);
                    return res.json({user: returnUser, token});
                });
            })(req, res, next);
        });

        router.post(`/${AuthRoute.ROUTER_PREFIX}/create`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            if (req.body.email &&
                // req.body.username &&
                req.body.password &&
                req.body.passwordConf) {
                if (req.body.password !== req.body.passwordConf) {
                    throw new Error('Passwords are not equal!');
                }
                const userData = {
                    email: req.body.email,
                    password: req.body.password,
                };
                const user = await UserModel.create(userData);


                const returnUser = {id: user.id};

                const token = jwt.sign(returnUser, Config.JWT_TOKEN_SECRET);
                return res.json({user: returnUser, token});
            }
            throw new Error('Error creating user.');
        }));
    }
}