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
    app.get('/auth/google/callback', passport.authenticate('google'));
}
