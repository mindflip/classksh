var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(res.locals.user);
    res.render('index', { title: 'Express', user: res.locals.user });
});

module.exports = router;
