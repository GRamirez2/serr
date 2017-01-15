var express = require('express');
var router = express.Router();

//- create the api
router.get('/api/testing', function(req, res, next) {
  res.send('testings');
});

module.exports = router;
