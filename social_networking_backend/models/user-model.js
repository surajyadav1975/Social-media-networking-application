const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    contact: Number,
    picture: String,
    username: String,
    email: String,
    password: String,
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
    }],
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
});

module.exports = mongoose.model("user", userSchema);
