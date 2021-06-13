const mongo = require('mongoose');

let UserSchema = new mongo.Schema({
    _id:{type:mongo.Types.ObjectId, default:new mongo.Types.ObjectId},
    name:mongo.Schema.Types.String,
    email:mongo.Schema.Types.String,
    age:mongo.Schema.Types.String,
});

module.exports = mongo.model('users', UserSchema);