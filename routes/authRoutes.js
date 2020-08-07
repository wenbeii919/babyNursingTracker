const passport = require('passport');

module.exports = (app) => {
// 'google' - GoogleStrategy internal identifier
// scope - what access to users' accounts do we want
    app.get('/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    // when the user gets sent back to the callback url
    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/nursings');            
        }
    );

    // user logout
    // req.logout() - a function automatically attached to request object by passport, takes a cookie and kills it
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};
