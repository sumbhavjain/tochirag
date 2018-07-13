var express = require('express');
var app = express();

module.exports.order = (req, res) => {
    res.json({
        message : 'yo'
    });
}