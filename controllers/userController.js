var userModel= require('../models/user')
var bcrypt = require('bcryptjs')
var tokenJWT='8U(AYVFO}(25kDN}Vop8u^St+nl_/*1fwk8.R-=4whM*k96B1)>xv0kvecW2-n+'
var jwt = require('jsonwebtoken');

module.exports={

    newUser:(req,res,next)=>{
        try {
        console.log(req.body)
        console.log("INGRESO A NEW USER")
            var usr= new userModel(req.body)
            usr.save((err,docs)=>{
                if (err){
                    console.log(err)
                return res.json({status:'ko'})
                }else{
                return res.json({status:'ok'})
                }
                
            })
        } catch (error) {
            console.log(error)
            return res.json({status:'ko'})
        }
        
    },

    login:(req,res,next)=>{
        console.log(req.body)
        userModel.find({email:req.body.email},function(err,docs){
			if(docs.length > 0){
                var user = docs[0];
                var password=req.body.password
                var decryptpass=req.body.password
				if(bcrypt.compareSync(password, user.password)){
                    console.log("Autenticacion Exitosa")
                    var token = jwt.sign({ id: user._id, type:user.type }, tokenJWT ,{expiresIn: 1440*60 });
					return res.json({
                        status:'ok',
                        nombre:user.name,
                        email:user.email,
                        phone:user.phone,
                        imagen:user.imagen,
                        token:token,
                        active:user.active,
                        type:user.type,
                        id:user._id
                        
                    })
				}
				else
				{
					return res.json({
                        status:"Error en la contraseña"
                    });
				}
			}
			else
			{
				return res.json({
                    status:"Usuario no existen en la base de datos "
                });
			}
        })

    }, 

    listUser:(req,res,next)=>{
        try {
            userModel.find({visible:'1'}, (err,docs)=>{
                if(docs.length>0){
                    return res.json({
                        status:"ok",
                        users:docs
                    })
                }
                else{
                    return res.json({
                        status:"ok",
                        users:[]
                    })
                }
               
            })
        } catch (error) {
            return res.json({ status:"ok"})
        }
       
    }, 
    listUserBack:(req,res,next)=>{
        try {
            userModel.find({visible:'1'}, (err,docs)=>{
                if(docs.length>0){
                    if(docs[0].description==1)
                    return res.json({
                        status:"ok",
                        usersback:docs
                    })
                }
                else{
                    return res.json({
                        status:"ok",
                        usersback:[]
                    })
                }
               
            })
        } catch (error) {
            return res.json({ status:"ok"})
        }
       
    }, 
   
    listUserId:(req,res,next)=>{
        try {
            userModel.find({_id:req.body.id,visible:'1'}, (err,docs)=>{
                if(docs.length>0){
                    return res.json({
                        status:"ok",
                        users:docs
                    })
                }
                else{
                    return res.json({
                        status:"ok",
                        users:[]
                    })
                }
               
            })
        } catch (error) {
            return res.json({ status:"ok"})
        }
       
    }, 
    deleteUser:(req,res,next)=>{
        console.log("Ingreso a eliminar")
        try {
            userModel.updateOne({_id:req.body.id},{visible:"0"}, function(err,docs){
                if(err)
                {
                    return res.json({status:"ko"})
                }
                else
                {
                    return res.json({status:'ok'})
                }
            })
        } catch (error) {
            return res.json({status:"ko"})
        }
       
    }, 

    editUser:(req,res,next)=>{
        try {
            userModel.find({_id:req.body.id}, (err,docs)=>{
                if(docs.length>0){
                    return res.json({
                        status:"ok",
                        users:docs
                    })
                }else
                {
                    return res.json({
                        status:"ok",
                        users:[]
                    })
                }
            })
        } catch (error) {
            return res.json({status:"ko"})
        }
    }, 
    //guarda editar
    editSaveUser:(req,res,next)=>{
        //cliente_model.updateOne({ci:req.body.ci,_id:req.body.id},{token:token},function(err,docs){
            console.log(req.body)
            data=req.body

        userModel.update({_id:req.body.id},req.body,function (err,docs){
            if(docs.length>0){
                return res.json({
                    status:"ok",
                    users:docs
                })
            }
            else{
                return res.json({
                    status:"ok",
                    users:[]
                })
            }
        })
    }, 

   
    
}
