const allPosts = require("./allPosts");
const createPost = require("./createPost");
const deletePost = require("./deletePost");
const getOnePost = require("./getOnePost");
const updatePost = require("./updatePost");

module.exports={
    paths:{
        '/posts':{
            ...createPost,
            ...allPosts
        },
        '/posts/{id}':{
            ...getOnePost,
            ...updatePost,
            ...deletePost
        }
    }
}