const jwt=require('jsonwebtoken');

const maxAge=60*60;
const createToken=(username)=>{
    console.log("hi")
    return jwt.sign({username},'hakoonamatata',{
        expiresIn:maxAge
    });
}
module.exports={createToken};