var express = require('express');
var router = express.Router();
var planController=require('../controllers/planController');


var upload = require('../libs/storagepdf');
var files = upload.fields([{ name: 'file', maxCount: 1 }, { name: 'pdf', maxCount: 1 }])
/* GET users listing. */

router.post('/new-plan' , planController.newPlan)
router.get('/list-plan' , planController.listPlan)
router.post('/list-plan-id' , planController.listPlanId)
router.post('/delete-plan' , planController.deletePlan)
router.post('/edit-plan' , planController.editPlan)
router.post('/save-edit-plan' , planController.editSavePlan)
router.post('/save-excel' , upload.single('file'), planController.saveExcel)


module.exports = router;
