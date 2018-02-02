var db = require('../database/db');
module.exports = function (req, res) {
    console.log("请求到getWeaponList接口")
    //处理跨域的问题
    res.setHeader('Content-type','application/json;charset=utf-8')
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    //先查询有没有这个user
    var group = req.body.group;
    var search = {group: group};
    res.setHeader('Content-type','application/json;charset=utf-8')
    db.weaponSchema.find(search, function(err, obj){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            res.send(obj)
        }
    });
};