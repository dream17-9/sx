var fs = require('fs');
module.exports = function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
    console.log(req.body);
    var act = JSON.parse(fs.readFileSync('./data_tab/activityList.json', 'utf-8'));
    act.list.push(req.body);
    fs.writeFileSync('./data_tab/activityList.json', JSON.stringify(act));
    res.end(JSON.stringify('success'));
};