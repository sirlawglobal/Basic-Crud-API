const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema({
    fname: {type:String, require: true ,minLength:3},
    lname: {type:String, require: true, minLength:3},
    email: {type:String, require: true},
    password: {type:String, require: true},
    datJoined: {type : Date,  default:Date.now()}

})

module.exports = mongoose.model('Admin', AdminSchema);