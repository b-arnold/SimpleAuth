const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
    // req: http request
    // res: response sent back to request
    // next: error handling
    app.post('/signup', Authentication.signup);
    app.post('/signin', requireSignin, Authentication.signin)

}