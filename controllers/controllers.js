const express = require("express")
let posts=require(`../data/posts.js`)


function index(req,res){
   let tag= req.query.tag
   if(tag){ 
    filteredPost= posts.filter(post=> post.tags.includes(tag));
   }

    res.json(tag)
}

function show(req,res){
    const id = parseInt(req.params.id)
    const post=posts.find(post => post.id==id)
    if(post=== undefined){
        // stato della risposta
        res.status(404)
        // restituzione un json co messaggio di errore
        return res.json({
            Error:"not found",
            message:"post non trovato"
        })
    }

    res.send(post)
}

function store(req,res){
    // definizione dell'id del nuovo post
    const newId = posts[posts.length-1].id+1
    // recupero i dati da del post da aggiungere 
    const{ title, content, image, tags } = req.body

    let newPost={
        id:newId,
        title:title,
        content:content,
        image:image,
        tags:tags
    }
    
   console.log(newPost)

    posts.push(newPost)
    res.status(201)
    res.json(newPost)
        
}

function update(req,res){

    const id=parseInt(req.params.id)
    // recupero il post da modificare
    let modifyPost=posts.find(post=>post.id==id)

    // se non trovo il post restituisco errore 404
    if(modifyPost===undefined){
        res.status(404)
        // restituzione un json co messaggio di errore
        return res.json({
            Error:"not found",
            message:"post non trovato"
        })
    }

    const { title, content, image, tags } = req.body
    // modifico i dati dei post
    modifyPost.title=title
    modifyPost.content=content
    modifyPost.image=image
    modifyPost.tags=tags
    
    res.json(modifyPost)
}

function modify(req,res){
    res.send(`modifica parziale del blog${req.params.id}`)
}

function destroy(req,res){
    let id= parseInt(req.params.id);

    let post = posts.find(post=>post.id==id)
  
    if ( post===undefined){
        res.status(404)
        // restituzione un json co messaggio di errore
        return res.json({
            Error:"not found",
            message:"post non trovato"
        })
    }

    // se ho il post lo elimino
    posts = posts.filter(post=> post.id!=id)
    
    //stampo array aggiornato con consol log
    console.log(posts)
    res.status(204)
    res.send()
}

module.exports={index,show,store,update,modify,destroy};