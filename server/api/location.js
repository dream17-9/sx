const fs = require('fs');
module.exports = function (req, res) {
    let adressList = require('../data_tab/address.json');
    res.end(JSON.stringify(adressList));
}