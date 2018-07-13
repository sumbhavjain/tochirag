var mail = require('./routes');
var from = 'cmsquiz.5@gmail.com'
var to = 'malhotrachirag2838@gmail.com'
var subject = "hello"
var message= "Kaam ho gaya"

module.exports = mail.email(from, to, subject, message);

