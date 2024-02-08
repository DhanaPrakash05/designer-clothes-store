const jwt=require('jsonwebtoken');

const maxAge=60*60;
const createToken=(username)=>{
    return jwt.sign({username},'hakoonamatata',{
        expiresIn:maxAge
    });
}

const requireAuth=(req,res,next)=>{
    const token=req.cookies.jwt;
    if(token){
        jwt.verify(token,'hakoonamatata',(err,decodedToken)=>{
            if(err){
                console.log(err)
            }else{
                console.log(decodedToken)
                next();
            }
        })
    }
    else{
        console.log("no token")
    }
}



module.exports={createToken,requireAuth};