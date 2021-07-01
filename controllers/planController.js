var planModel= require('../models/plan')

module.exports={

    newPlan:(req,res,next)=>{
    try {
        console.log("req.body")
        console.log(req.body)
        console.log("*******")
       
        var data = {
            name: req.body.name,
            year: req.body.year,
            dateStart: req.body.dateStart,
            dateEnd: req.body.dateEnd,
            auditor: req.body.auditor,
            responsible: req.body.responsible,
          };
        var plan= new planModel(data)
        plan.save((err,docs)=>{
            //Proceso de guardado
            if (err){
                console.log("el error es err")
                console.log(err)
            return res.json({status:'ko'})
            }else{
            return res.json({status:'ok'})
            }
            
        })
        } catch (error) {
            return res.json({status:'ko'})
        }    
    },

    listPlan:(req,res,next)=>{
        try {
            planModel.find({visible:'1'}, (err,docs)=>{
                if(docs.length>0){
                    return res.json({
                        status:"ok",
                        plans:docs
                    })
                }
                else{
                    return res.json({
                        status:"ok",
                        plans:[]
                    })
                }
               
            })
        } catch (error) {
            return res.json({ status:"ok"})
        }
       
    }, 
   
    listPlanId:(req,res,next)=>{
        try {
            planModel.find({_id:req.body.id,visible:'1'}, (err,docs)=>{
                if(docs.length>0){
                    return res.json({
                        status:"ok",
                        plan:docs
                    })
                }
                else{
                    return res.json({
                        status:"ok",
                        plan:[]
                    })
                }
               
            })
        } catch (error) {
            return res.json({ status:"ok"})
        }
       
    }, 
    deletePlan:(req,res,next)=>{
        console.log("Ingreso a eliminar")
        try {
            planModel.updateOne({_id:req.body.id},{visible:"0"}, function(err,docs){
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

    editPlan:(req,res,next)=>{
        try {
            planModel.find({_id:req.body.id}, (err,docs)=>{
                if(docs.length>0){
                    return res.json({
                        status:"ok",
                        plan:docs
                    })
                }else
                {
                    return res.json({
                        status:"ok",
                        plan:[]
                    })
                }
            })
        } catch (error) {
            return res.json({status:"ko"})
        }
    }, 
    //guarda editar
    editSavePlan:(req,res,next)=>{
        //cliente_model.updateOne({ci:req.body.ci,_id:req.body.id},{token:token},function(err,docs){
            console.log(req.body)

         planModel.update({_id:req.body.id},req.body,function (err,docs){
            if(docs.length>0){
                return res.json({
                    status:"ok",
                    plan:docs
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
    saveExcel:(req,res,next)=>{

            console.log("Ingreso A saveFil controlador")
            obj = new planModel(req.body);

            if (req.file) {
                const { filename } = req.file;
                obj.setExcelUrl(filename);
            }
            // return res.json("success");
    
            obj.save(function (err, docs) {
                if (err) console.log(err);
                 res.json({status:"ok"})
            });
        
    }, 

}
