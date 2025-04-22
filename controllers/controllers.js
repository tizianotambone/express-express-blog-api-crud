const posts=require(`../data/posts.js`)


function index(req,res){
   res.json(posts)
}

function show(req,res){
    res.send('dettaglio del mio blog'+req.params.id)
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
    res.send(`cancellazione delle informazioni del blog${req.params.id}`)
}

module.exports={index,show,store,update,modify,destroy};