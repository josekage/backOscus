var fs= require('fs');
//decodificar con el Public
// var key=fs.readFileSync('/Users/fernandalopezmarin/Documents/backend/server/keys/public.pem')
var key='8U(AYVFO}(25kDN}Vop8u^St+nl_/*1fwk8.R-=4whM*k96B1)>xv0kvecW2-n+'
var jwt = require('jsonwebtoken');

module.exports = {

	isJwtValidUser : function(req, res, next){
        if(req.body.token)
        {
            jwt.verify(req.body.token,key, function(err,decode){
                if(err)
                {
                    return res.json({
                        status:"ko",
                        msg:"error de autenticación"
                    })  
                }
                else{
                    // console.log(decode)
                    next()
                }
               
            })
        }
        else
        {
            return res.json({
                status:"ko",
                msg:"error de autenticación"
            })
        }
    },

	isJwtAdmin: function(req, res, next){
        if(req.body.token)
        {
            jwt.verify(req.body.token,key, function(err,decode){
                if(err)
                {
                    return res.json({
                        status:"ko",
                        msg:"error de autenticación"
                    })  
                }
                else{
                    console.log(decode)
                    if(decode.type=="1")
                    {
                        next()
                    }
                    else
                    {
                        return res.json({
                            status:"ko",
                            msg:"error de autenticación"
                        }) 
                    }
                    
                }
               
            })
        }
        else
        {
            return res.json({
                status:"ko",
                msg:"error de autenticación"
            })
        }
    },
    
    isJwtValidAdmin : function(req, res, next){
        if(req.body.token)
        {
            jwt.verify(req.body.token,key, function(err,decode){
                if(err)
                {
                    return res.json({
                        status:"ko",
                        msg:"error de autenticación"
                    })  
                }
                else{
                    if(decode.type=="1")
                    {
                        next()
                    }
                    else
                    {
                        return res.json({
                            status:"ko",
                            msg:"No Autorizado"
                        })  
                    }
                    
                }
               
            })
        }
        else
        {
            return res.json({
                status:"ko",
                msg:"error de autenticación"
            })
        }
	},

	isHeaderValid: function(req,res,next){
       
        if(req.headers.context=="smartApi3" && req.headers.userapi=="Chibuleo" && req.headers.token=="qbZs}g8B~(0O91{")
        {
            next()
        }
        else
        {
            return res.json({
                status:"ko",
                msg:"error de autenticación"
            })
        }
		
	},

	

}