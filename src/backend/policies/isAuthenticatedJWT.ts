import * as passport from "passport";

export const passportJWTAuth = passport.authenticate('jwt', {session: false});

export const isAuthenticatedJWT = (req, res, next) => {
    passport.authenticate('jwt', {session: false}, (err, user, info) => {
        if (err) {
            console.log(err);
        }
        if (!user) { return res.redirect('/login'); }
        req.user = user;

        return next();
    })(req,res,next);

};