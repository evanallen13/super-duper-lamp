var express = require('express');
var router = express.Router();
const { MessagingResponse } = require('twilio').twiml;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();
  console.log("Hello")

  twiml.message('The Robots are coming! Head for the hills!');

  res.type('text/xml').send(twiml.toString());
});

module.exports = router;
