var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://www.merenguesss.cn:27017/mhw');//；连接数据库
var Schema = mongoose.Schema;   //  创建模型
var UserSchema = new Schema({
    name: String,
    password: String,
    logindate : Date
}); //  定义了一个新的模型，但是此模式还未和users集合有关联
var WeaponSchema = new Schema({
    id: String,
    name: String,
    rare: String,
    attackpower: Number,
    sharpness: String,
    affinity: Number,
    elementDamage: Number,
    material: String,
    source: String
});
var WeaponSchema = new Schema({
    id: String,
    name: String,
    subset: Number
});
module.exports.weaponSchema = mongoose.model('Weapons', WeaponSchema);
module.exports.weaponListSchema = mongoose.model('Weaponlists', WeaponListsSchema);
module.exports.userSchema = mongoose.model('Users',UserSchema);  //  与users集合关联