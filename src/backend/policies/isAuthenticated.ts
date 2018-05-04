export const isAuthenticated = (req, res, next) => {
    if (req.session && req.session.authenticated) {
        return next()
    } else {
        return res.redirect('/login');
    }
};