const jwt = require('jsonwebtoken');


module.exports = (req,res, next) =>{
   try{
    const token = req.headers.authorization.split(" ")[1];
    const decorded =jwt.verify(token,"secret");
    res.userData =decorded;
    next()
   }
   catch(error){
        return res.status(401).json({
            message :'Auth failed  !!'
        });

   }

};