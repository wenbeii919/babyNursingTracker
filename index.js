const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

// accessToken - a callback function, to take the user information to save to the db
// refreshToken - to refresh the access token when it's out of effect
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, 
    (accessToken, refreshToken, profile, done) => {
        console.log('access token', accessToken);
        console.log('refresh token', refreshToken);
        console.log('profile:', profile);
    }
    )
);

// 'google' - GoogleStrategy internal identifier
// scope - what access to users' accounts do we want
app.get('/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

// when the user gets sent back to the callback url
app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// http://localhost:5000/auth/google/callback?
// code=4%2F2gGg62LIwnzQPWHDHz0R41iL0VagR89P5jUEK2e5u0AvY2f5zeqlpGCscFGrpEHLitAIqktovfdfn6zhRPWZcgQ&