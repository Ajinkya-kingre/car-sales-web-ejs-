var express = require('express');
const passport = require("passport");
const localStrategy = require("passport-local");

var router = express.Router();
const userModel = require("./users");

passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/car-listing', function(req, res, next) {
  res.render('car-listing');
});
router.get('/buying-page', function(req, res, next) {
  res.render('buying-page');
});
router.get('/services', function(req, res, next) {
  res.render('services');
});
router.get('/profile', function(req, res, next) {
  res.send('welcome to profile');
});
router.get('/login-failed', function(req, res, next) {
  res.send('Login Fialed');
});


// user login and register
router.post("/register", function (req, res) {
  let userdata = new userModel({
    username: req.body.username,
    email: req.body.email,
  });

  userModel
    .register(userdata, req.body.password)
    .then(function (registereduser) {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/profile");
      });
    });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login-failed",
    failureFlash: true
  }),
  function (req, res) {}
);

router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}

module.exports = router;
