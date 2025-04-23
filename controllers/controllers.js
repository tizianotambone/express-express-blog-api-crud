const express = require("express")
let posts=require(`../data/posts.js`)


function index(req,res){
   let tag= req.query.tag
   if(tag){ filteredPost= posts.filter(post=> post.tags.includes(tag))

   }
//  è un errore dare l'errore 404 perchè in realtà nella ricerca è presente il contenuto 
//    if(filteredPost === undefined){
//         // stato della risposta
//         res.status(404)
//         // restituzione un json co messaggio di errore
//         return res.json({
//             Error:"not found",
//             message:"posts non trovati"
//         })
//     }

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
    const body =req.body
    const newId= posts[posts.length-1].id+1
    let newPost={
        id:newId,
        title:body.title,
        content:body.content,
        image:body.image,
        tags:body.tags
    }
    
}

function update(req,res){
    res.send(`modifica totale delle informazioni del singolo blog:${req.params.id} `)
}
function modify(req,res){
    res.send(`modifica parziale del blog${req.params.id}`)
}

function destroy(req,res){
    let id= parseInt(req.params.id);

    //  utilizzo del metodo splice 
    // 
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