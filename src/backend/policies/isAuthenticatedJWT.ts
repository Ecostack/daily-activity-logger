import * as passport from "passport";

export const isAuthenticatedJWT = (req, res, next) => {
    passport.authenticate('jwt', {session: false}, (err, user, info) => {
        if (err) {
            console.log(err);
        }
        if (!user) {
            return res.status(403).send(`Not correctly authenticated.`)
        }
        req.user = user;
        return next();
    })(req, res, next);

};