const allPosts = require("./allPosts");
const createPost = require("./createPost");
const getOnePost = require("./getOnePost");

module.exports={
    paths:{
        '/posts':{
            ...createPost,
            ...allPosts
        },
        '/posts/{id}':{
            ...getOnePost
        }
    }
}