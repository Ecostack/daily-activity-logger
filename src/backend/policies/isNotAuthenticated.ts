export const isNotAuthenticated = (req, res, next) => {
    if (req.session && req.session.authenticated) {
        return res.redirect('/');
    }
    next();
};