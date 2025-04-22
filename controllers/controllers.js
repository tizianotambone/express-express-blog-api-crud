const { request } = require("express")
let posts=require(`../data/posts.js`)


function index(req,res){
   let tag= req.query.tag
   let filteredPost= posts.filter(post=> post.tags.includes(tag))

   if(filteredPost === undefined){
        // stato della risposta
        res.status(404)
        // restituzione un json co messaggio di errore
        return res.json({
            Error:"not found",
            message:"posts non trovati"
        })
    }

    res.send(filteredPost)
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
    res.send('inserimento di nuove informazioni del blog')
}

function update(req,res){
    res.send(`modifica totale delle informazioni del singolo blog:${req.params.id} `)
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