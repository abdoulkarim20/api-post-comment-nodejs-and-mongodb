const mongoose=require("mongoose");
const PostsModel=mongoose.model(
    "node-api", /*Database name*/
    { /*Table attributes*/
        auteur:{
            type:String,
            require:true
        },
        message:{
            type:String,
            require:true
        },
        date:{
            type:Date,
            default:Date.now
        }
    },
    "posts" /*Table name*/
)
module.exports = { PostsModel };