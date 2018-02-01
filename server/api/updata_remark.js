const fs = require('fs');
module.exports = function (req, res) {
    let {content, id} = req.body;
    let list = JSON.parse(fs.readFileSync('./data_tab/residentList.json', 'utf-8'));
    list.forEach((v, i) => {
        if (v.id === id) {
            v.msg = content;
        }
    });
    fs.writeFileSync('./data_tab/residentList.json', JSON.stringify(list));
    res.end('success');
}