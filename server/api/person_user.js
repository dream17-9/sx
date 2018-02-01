const fs = require('fs');
module.exports = function (req, res) {
    let list = fs.readFileSync('./data_tab/usersign_list.json', 'utf-8');
    res.end(list);
}