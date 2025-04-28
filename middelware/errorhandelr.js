function errorhandler(err,req,res,next){
    res.status(500);
    res.json({ 
        Error:err.message
    })
}

module.exports=errorhandler