const fs = require('fs');
const jwt = require('jsonwebtoken');
module.exports = function (req, res) {
    let {id} = req.body;
    console.log(req.body);
    jwt.verify(req.body.token, '1508B', (errs, decoded) => {
        // console.log(errs);
        if (errs) {
            errs.code = 1001 // 登录超时
            res.end(JSON.stringify(errs));
        } else {
            console.log(decoded);
            let list = JSON.parse(fs.readFileSync('./data_tab/residentList.json', 'utf-8'));
            list.forEach((v, i) => {
                if (v.id === id) {
                    list.splice(i, 1);
                }
            });
            fs.writeFileSync('./data_tab/residentList.json', JSON.stringify(list));
            res.end('success');
        }
    });
}