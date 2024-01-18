const {Schema,model} = require("mongoose");

const userSchema = new Schema({
    user_name:{
        type:String,
        required:true,
        trim:true
    },
    user_email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    user_password:{
        type:String,
        trim:true,
        required:true
    }
});

userSchema.method.toJOSN = function(){
    const user = this;
    const userObj = user.toObject();
    delete userObj.__v;
    return userObj;
}

const Users = model("users",userSchema);

module.exports = Users