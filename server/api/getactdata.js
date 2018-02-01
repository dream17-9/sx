const fs = require('fs');
module.exports = function (req, res) {
    let data = JSON.parse(fs.readFileSync('./data_tab/activityList.json', 'utf-8'));
    res.end(JSON.stringify(data));
}