const mongoose=require('mongoose');

const postsSchema=mongoose.Schema({
    content: String,
    image: { type: String, default: "" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    createdAt: { type: Date, default: Date.now },
});

module.exports=mongoose.model('Post',postsSchema);