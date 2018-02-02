var db = require('../database/db');
/*插入数据库函数*/
function insert(name,psw){
      //数据格式
    var user =  new db.weaponSchema({
                name : name,
                password : psw,
                logindate : new Date()
            });
    user.save(function(err,res){
        if(err){
            console.log(err);
        }
        else{
            console.log(res);
        }
    })
}


module.exports = function (req, res) {
    console.log("请求到register接口")
    //处理跨域的问题
    res.setHeader('Content-type','application/json;charset=utf-8')
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    //先查询有没有这个user
    var name = req.body.username;
    var password = req.body.password;
    //密码加密
    // var md5 = crypto.createHash("md5");
    // var newPas = md5.update(UserPsw).digest("hex");
    //通过账号验证
    var updatestr = {id: /gso/};
    if(name == ''){
        res.send({status:'success',message:false}) ;
    }
    res.setHeader('Content-type','application/json;charset=utf-8')
    db.weaponSchema.find(updatestr, function(err, obj){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log(obj);
            if (obj.length == 0) {
                //如果查出无数据,就将账户密码插入数据库
                // insert(name,password);
                //返回数据到前端
                res.send(obj)
            }
            else if(obj.length !=0) {
                res.send(obj)
            }
            else {
                res.send(obj)
            }
        }
    })
};