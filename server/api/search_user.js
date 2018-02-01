const fs = require('fs');
module.exports = function (req, res) {
    let val = req.body.name;
    let newList = [];
    let list = JSON.parse(fs.readFileSync('./data_tab/residentList.json'));
    list.forEach((v, i) => {
        if (v.name.indexOf(val) !== -1 || v.phone === val) {
            newList.push(v);
        }
    });
    res.end(JSON.stringify(newList));
}