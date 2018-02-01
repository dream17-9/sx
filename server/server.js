const fs = require('fs');
const jwt = require('jsonwebtoken');
let express = require('express');
let body_parser = require('body-parser');
let multer = require('multer');
// let fromidable = require('fromidable');
let fieldname = '';
let app = express();
app.use(body_parser.json());
// 上传图片
let storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        fieldname = file.fieldname;
        cb(null, file.fieldname + '-' + file.originalname)
    }
})
let uploader = multer({storage: storage});
// 跨域请求配置
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
// 上传图片接口
app.post('/user/upload', uploader.single('file'), function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
    res.end(JSON.stringify(1));
})
// 添加活动
// let addAct = '/admin/activity/add';
let addActCallback = require('./api/activity_add.js');
app.post('/admin/activity/add', addActCallback);
// 地址接口
// /admin/community/location/root
// /admin/community/locationildren
// 二接口入参 param ： parentID
// 请求地址
let addressCallback = require('./api/location.js');
app.get('/admin/community/location/root', addressCallback);
// 请求邀请用户数据
let residentCallback = require('./api/resident.js');
app.post('/admin/userList', residentCallback);
// 查询用户
let searchCallback = require('./api/search_user.js');
app.post('/admin/search/user', searchCallback); 
// 删除用户
let deleteCallback = require('./api/delete_user.js');
app.post('/admin/delete/user', deleteCallback);
// 添加备注
let remarkCallback = require('./api/updata_remark.js');
app.post('/admin/updata/remark', remarkCallback);
// 用户报名
let signCallback = require('./api/user_sign.js');
app.post('/admin/user/sign', signCallback);
// 人员管理
let personCallback = require('./api/person_user.js');
app.post('/admin/person/user', personCallback);
// 人员管理删除人员
let delpersonCallback = require('./api/delete_person.js');
app.post('/admin/del/person', delpersonCallback);
// 登录
app.post('/admin/loginUser', (req, res) => {
    console.log(req.body);
    res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
    var admin_list = JSON.parse(fs.readFileSync('./data_tab/admin_list.json','utf-8'));
    //flag 为true说明用户存在，为false说明用户不存在
    var token, response, flag=false;
    admin_list.list.forEach((item) => {
        if (item.user_name == req.body.user_name) {
            flag = true;
            if (item.user_password == req.body.user_password) {
                token = jwt.sign(req.body, '1508B', { expiresIn: 30 });
                response = {
                    "code": 1,
                    "token": token,
                    "msg": "SUCCESS"
                };
            } else {
                response = {
                    "code": 2,
                    "error":"error",
                    "msg": "密码错误"
                };
            }
        }
    });
    if (!flag) {
        response = {
            "code": 3,
            "error":"error",
            "msg": "此用户不存在"
        };
    }
    res.end(JSON.stringify(response));
});
// 注册
app.post('/admin/registerUser', (req, res) => {
    console.log(req.body);
    res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
    let admin_list = fs.readFileSync('./admin_list.json', {encoding: 'utf-8'});
    admin_list = JSON.parse(admin_list);
    admin_list.list.push(req.body);
    fs.writeFileSync('./admin_list.json', JSON.stringify(admin_list));
    let obj = {
        "code": 1,
        "msg": "SUCCESS"
    };
    res.end(JSON.stringify(obj));
});
// menu菜单
let publics = '/admin/menu/:name';
app.all(publics, (req, res) =>{
    let menuList = null;
    switch (req.params.name) {
        case 'entry':
        menuList = fs.readFileSync('../mock/entry.json', {encoding: 'utf-8'});
        break;
        case 'grid':
        menuList = fs.readFileSync('../mock/grid.json', {encoding: 'utf-8'});
        break;
        case 'public':
        menuList = fs.readFileSync('../mock/public.json', {encoding: 'utf-8'});
        break;
    }
    res.end(menuList);
});
// 获取活动数据
let getActDataCallback = require('./api/getactdata.js');
app.post('/getActData', getActDataCallback);
app.listen(3000, (data) => {
    console.log('server listen 3000');
});