const express=require("express");
const router=express.Router();
const objectID=require("mongoose").Types.ObjectId /*permet de recuperer l'objet a modifier par son id*/
const {PostsModel}=require("../models/postsModel");

/*Recupere tous les posts*/
router.get('/' , (req,res)=>{
    PostsModel.find((error,docs)=>{
        // console.log(`les donnes sont ${docs}`)
        if(!error) res.send(docs);
        else console.log(`une erreur se produite : ${error}`);
    })
})

/*Enregistrer un posts*/
router.post('/',(req,res)=>{
    // console.log('le contenu de req',req.body);
    const newRecord=new PostsModel({
        auteur:req.body.auteur,
        message:req.body.message
    });
    newRecord.save((error,docs)=>{
        if(!error)res.send(docs);
        else console.log(`Erreur creating new posts: ${error}`);
    })
})

/*Modifier un posts*/
router.put('/:id',(req,res)=>{
    if(!objectID.isValid(req.params.id))
    return res.status(400).send(`L'identifiant entrer n'existe pas: ${req.params.id}`)
    const updateRecord={
        auteur:req.body.auteur,
        message:req.body.message
    }
    PostsModel.findByIdAndUpdate(
        req.params.id,
        {$set:updateRecord},
        {new:true},
        (error,docs)=>{
            if(!error) res.send(docs)
            else console.log(`error for updated posts: ${error}`);
        }
    )
})

/*Supprimer un posts*/
router.delete('/:id',(req,res)=>{
    if(!objectID.isValid(req.params.id))
    return res.status(400).send(`L'identifiant entrer n'existe pas: ${req.params.id}`)
    PostsModel.findByIdAndRemove(
        req.params.id,
        (error,docs)=>{
            if(!error) res.send(docs)
            else console.log(`Eroor for deleting post ${error}`);
        }
    )
})

/*Pour recuperer un seul posts a partir de son id*/
router.get('/:id',(req,res)=>{
    if(!objectID.isValid(req.params.id))
    return res.status(400).send(`L'identifiant entrer n'existe pas: ${req.params.id}`)
    PostsModel.findById(
        req.params.id,
        (error,docs)=>{
            if(!error) res.send(docs);
            else console.log(`Error for geting post by id : ${error}`);
        }
    )
})

module.exports = router;