function notFound(req,res,next){
    res.status(404).json({
       staus:"error",
       message:"not found"
    })
}
module.exports=notFound;