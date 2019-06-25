const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

require('dotenv').config();

 passport.use(
   new GoogleStrategy(
     {
       clientID: process.env.GOOGLE_STRATEGY_CLIENT_ID,
       clientSecret: process.env.GOOGLE_STRATEGY_CLIENT_SECRET,
       callbackURL: process.env.GOOGLE_STRATEGY_CALLBACK_URL,
     },
     (accessToken, refreshToken, profile, cb) => {
       // passport callback function
       console.log('accessToken ==>', accessToken);
       console.log('refreshToken ==>', refreshToken);
       console.log('profile ==>', profile);
       console.log('cb ==>', cb);
     }
   )
 );
