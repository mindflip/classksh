const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bycrypt = require('bcrypt');

const User = require('../model/admin.model');

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    }, async (username, password, done) => {
        try {
            const exUser = await User.find({ username: username });
            console.log(exUser);
            if(exUser) {
                const result = await bycrypt.compare(password, exUser.password);
                if(result) {
                    done(null, exUser);
                } else {
                    done(null, false, { message: '비밀번호 오류' });
                }
            } else {
                done(null, false, { message: '해당하는 유저가 없음' });
            }

        } catch (err) {
            console.error(err);
            done(err);
        }
    }));
};