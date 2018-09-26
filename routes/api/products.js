var express = require('express');
var data = require('../../data/products');
var router = express.Router();
var lodash = require('lodash')

router.get('/', function (req, res) {
  res.json(data);
});

router.get('/:id', function(req, res) {
  var idproduct = req.params.id;
  var product = lodash.find(data.list, function(o){
    return o.id == idproduct;
  });
    if(product == null)
    {
      res.status(404);
      res.send('404 error');
    }
    else
    {
      res.send(product);
    }
});

router.get('/search/:name', function(req,res){
  var nameProduct = req.params.name;
  var product = lodash.filter(data.list, function(o){
    return o.name == nameProduct;
  });
  console.log(product);
  res.send(product);
});

router.post('')



module.exports = router;
