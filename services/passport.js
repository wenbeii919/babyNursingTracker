const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

// user.id(internal db id) != profile.id(google oauth)
// serializeUser takes a user model instance, and turns it into an id
// so that deserializeUser can take that id to search/query in the users collection db
// when the specific user is found, we return back the user
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

// accessToken - a callback function, to take the user information to save to the db
// refreshToken - to refresh the access token when it's out of effect
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    }, 
    async (accessToken, refreshToken, profile, done) => {
        // console.log('profile', profile);
        const existingUser = await User.findOne({ googleID: profile.id })
            if (existingUser) {
                // when the given profile ID is existed in the collection already
                return done(null, existingUser);
            }
            const user = await new User({ googleID: profile.id }).save();
            done(null, user);
        }
    )
);
