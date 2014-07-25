var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//定义chat对象模型
var UserSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
    sex: Number
});

exports.User = mongoose.model('User', UserSchema);