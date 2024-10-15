const mongoose=require('mongoose');
const { Buffer } = require('safe-buffer');

const postsSchema=mongoose.Schema({
    image: String,
    content: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    createdAt: { type: Date, default: Date.now },
});

module.exports=mongoose.model('Post',postsSchema);