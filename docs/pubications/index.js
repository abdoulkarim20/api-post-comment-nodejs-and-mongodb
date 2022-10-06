const allPosts = require("./allPosts");
const getOnePost = require("./getOnePost");

module.exports={
    paths:{
        '/posts':{
            ...allPosts
        },
        '/posts/{id}':{
            ...getOnePost
        }
    }
}