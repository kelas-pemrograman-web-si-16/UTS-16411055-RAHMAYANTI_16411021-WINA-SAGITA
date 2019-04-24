var express = require('express');
var router = express.Router();

router.get('/home', function(req, res, next) {
    res.render('home')
})

router.get('/harga', function(req, res, next) {
    res.render('harga')
})

router.get('/pesan', function(req, res, next) {
    res.render('pesan')
})

router.get('/regist', function(req, res, next) {
    res.render('regist')
})

router.get('/rbayar', function(req, res, next) {
    res.render('rbayar')
})


module.exports = router;