import {UserRoute} from "./UserRoute";
import {RouterHelper} from "./RouterHelper";
import {UserModel} from "../models/UserModel";
import {isNotAuthenticated} from "../policies/isNotAuthenticated";
import {NextFunction} from "express";
import * as passport from "passport";
import {isAuthenticated} from "../policies/isAuthenticated";

export class AuthRoute {
    private static ROUTER_PREFIX = 'auth';

    public static create(router) {
        // GET /logout
        router.get(`/${AuthRoute.ROUTER_PREFIX}/logout`, function (req, res, next) {
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

        router.get(`/${AuthRoute.ROUTER_PREFIX}/loggedin`, isAuthenticated, (req: any, res: any, next: NextFunction) => {
            res.ok();
        });

        router.post(`/${AuthRoute.ROUTER_PREFIX}/login`, isNotAuthenticated, (req: any, res: any, next: NextFunction) => {
            if (!req.body || !req.body.email || !req.body.password)
                return res.status(400).send({success: false});
            req.body.username = req.body.email;

            passport.authenticate('local', (err, user, info) => {
                if (err) {
                    return next(err);
                }
                if (!user) res.status(400).send({success: false});

                req.logIn(user, (err) => {
                    if (err || !user) {
                        return next(err);
                    }
                    req.session.regenerate(function (err) {
                        Object.assign(req.session, {
                            authenticated: true,
                            user: {id: user.id}
                        })
                        console.log(req.session);
                        res.json(user)
                        // return res.redirect('/');
                    })
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
                return req.session.regenerate(function (err) {
                    Object.assign(req.session, {
                        authenticated: true,
                        user: {id: user.id}
                    })
                    console.log(req.session);
                    res.json(user);
                })

                // return res.json(await UserModel.create(userData))
            }
            throw new Error('Error creating user.');
        }));
    }
}