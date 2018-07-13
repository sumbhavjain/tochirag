var express = require('express');
var router = express.Router();
var orders = require('../controllers/orders');
var mailings = require('../controllers/email/call_mail');


router
    .route('/orders')
    .get(orders.order);

router
    .route('/routes')
    .get(mailings);

module.exports=router;