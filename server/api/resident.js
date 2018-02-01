// const Mock = require('mockjs');
const fs = require('fs');
module.exports = function (req, res) {
    let {pageSize, num} = req.body;
    // const data = Mock.mock({
    //     'list|100': [
    //         {
    //             'id|+1': 0,
    //             'name': '@cname',
    //             'age|30-70': 1,
    //             'sex|1': ['男', '女'],
    //             'phone': /13[123569]{1}\d{8}|15[1235689]\d{8}|188\d{8}/,
    //             'msg': '-' 
    //         }
    //     ]
    // });
    let list = JSON.parse(fs.readFileSync('./data_tab/residentList.json', 'utf-8'));
    let clist = list.slice((pageSize - 1) * num, pageSize * num);
    res.end(JSON.stringify(clist));
}