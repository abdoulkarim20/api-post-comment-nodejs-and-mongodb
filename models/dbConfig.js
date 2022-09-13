const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://localhost:27017/node-api",
    {useNewUrlParser:true, useUnifiedTopology:true},
    (err)=>{
        if(!err) console.log("Mongodb connected ");
        else console.log(`erreur de connection sur le serveur ${err}`);
    }
)