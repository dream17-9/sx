const fs = require('fs');
module.exports = function (req, res) {
    let {id} = req.body;
    let dataList = JSON.parse(fs.readFileSync('./data_tab/usersign_list.json', 'utf-8'));
    dataList.list.forEach((v, i) => {
        if (v.code === id) {
            dataList.list.splice(i, 1);
        }
    });
    fs.writeFileSync('./data_tab/usersign_list.json', JSON.stringify(dataList));
    res.end('success');
}