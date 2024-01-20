var jwt = require("jsonwebtoken");

const JWT_secrate = 'F$ckY0uH@cker';

const fetchuser =(req,res,next)=>{
    // get the user from the jwy token and add id 
    const token= req.header('auth-token');
    if(!token){
        return res.status(401).send({ error: 'valid token dey re boka' })
    }
    try {
        const data =jwt.verify(token,JWT_secrate);
        req.user=data.user; 
        next();
    } catch (error) {
        return res.status(401).send({ error: 'valid token dey re boka' })
    }

}
module.exports= fetchuser;