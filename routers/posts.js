// definizione delle rotte 

const express = require('express');
const router = express.Router(); 


router.get('/',(req,res)=>{
  res.send(posts)
});
router.get('/:id',(req,res)=>{
    res.send('dettaglio del mio blog'+req.params.id)
});
router.post('/',(req,res)=>{
    res.send('inserimento di nuove informazioni del blog')
})
router.put('/:id',(req,res)=>{
    res.send(`modifica totale delle informazioni del blog:${req.params.id} `)
});
router.patch('/:id',(req,res)=>{
    res.send(`modifica parziale della pizza${req.params.id}`)
})
router.delete('/:id',(res,req)=>{
    res.send(`cancellazione delle informazioni del blog${req.params.id}`)
})
module.exports=router;

