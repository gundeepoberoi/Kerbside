var router = require('express').Router();
const { requiresAuth } = require('express-openid-connect');

router.get('/', function (req, res, next) {
  res.render('index', {
    isAuthenticated: req.oidc.isAuthenticated(),
    title: 'About | Kerbside'
  });
});

router.get("/add", function (req, res, next) {
  res.render("add", {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    title: 'Add | Kerbside'
  });
});

router.get("/account", function (req, res, next) {
  res.render("account", {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    title: 'Account | Kerbside'
  });
});

module.exports = router;
