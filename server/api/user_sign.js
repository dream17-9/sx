const fs = require('fs');
module.exports = function (req, res) {
    console.log(req.body);
    res.writeHead(200, {"Content-Type":"text/html"});
    let data = JSON.parse(fs.readFileSync('./data_tab/usersign_list.json', 'utf-8'));
    data.list.unshift(req.body);
    fs.writeFileSync('./data_tab/usersign_list.json', JSON.stringify(data));
    res.end('success');
}