const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

require('dotenv').config();

 passport.use(
    new GoogleStrategy({
      clientID: process.env.GOOGLE_STRATEGY_CLIENT_ID,
      clientSecret: process.env.GOOGLE_STRATEGY_CLIENT_SECRET,
    }, () => {
        // passport callback function
    })
);
