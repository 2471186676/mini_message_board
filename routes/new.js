var express = require("express");
var router = express.Router();
var messages = require("./index").messages

/* GET users listing. */
router.get("/new", function (req, res, next) {
	res.render("new");
});

router.post('/new', function(req,res,next){
  messages.push({
    text: req.body.content,
    user: req.body.user,
    added: new Date()
  })
  res.redirect("/");
})

module.exports = router;
