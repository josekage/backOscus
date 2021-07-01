var userModel=require('../models/user')
var key='8U(AYVFO}(25kDN}Vop8u^St+nl_/*1fwk8.R-=4whM*k96B1)>xv0kvecW2-n+'
var jwt = require('jsonwebtoken');
module.exports={
    evaluateProfile:function(req,res,next){
        jwt.verify(req.body.token, key, function(err, decoded) {
            console.log(decoded) 
            console.log("*************** REQUEST ***********")
            console.log(req.url)
            var url=req.path
            
            // url=url.split('/')
            userModel.find({_id:decoded.id},function(err,docs){
                //var permisos= docs[0].permissions
                // console.log(permisos)
                next()
                
                // if(permisos.includes(url[1]))
                // {
                //     next()
                // } 
                // else{
                //     console.log("MODULO NO PERMITIDO")
                //     next()
                // }
            })
          });
        
        
    }
}