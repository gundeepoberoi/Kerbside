var router = require('express').Router();
const { requiresAuth } = require('express-openid-connect');

router.get('/', function (req, res, next) {
  res.render('index', {
    isAuthenticated: req.oidc.isAuthenticated()
  });
});

router.get('/profile', requiresAuth(), function (req, res, next) {
  res.render('profile', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    title: 'Profile page'
  });
});

router.get("/account", function (req, res, next) {
  res.render("account");
});

router.get("/add", function (req, res, next) {
  res.render("add");
});

router.get("/listings", function (req, res, next) {
  res.render("listings");
});

module.exports = router;
