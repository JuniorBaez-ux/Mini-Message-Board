var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hello there!",
    user: "Anakin",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Some programmer",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board' , messages: messages});
});

router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', function(req, res, next) {
  
  const newMessage = {
    text: req.body.text,
    user: req.body.user,
    added: new Date()
  };
  
  messages.push(newMessage);
  res.redirect('/');
});

module.exports = router;
