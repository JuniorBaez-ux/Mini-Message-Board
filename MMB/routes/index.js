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
  res.render('index', { title: 'Mini Message Board' }, { messages: messages });
});

module.exports = router;
