const allPosts = require("./allPosts");

module.exports={
    paths:{
        '/posts':{
            ...allPosts
        }
    }
}