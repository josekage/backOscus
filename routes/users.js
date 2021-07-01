var express = require('express');
var router = express.Router();
var user_controller=require('../controllers/userController');

/* GET users listing. */

router.post('/new-user' , user_controller.newUser)
router.get('/list-user' , user_controller.listUser)
router.get('/list-user-back' , user_controller.listUserBack)
router.post('/list-user-id' , user_controller.listUserId)
router.post('/delete-user' , user_controller.deleteUser)
router.post('/edit-user' , user_controller.editUser)
router.post('/save-edit-user' , user_controller.editSaveUser)
router.post('/login',  user_controller.login);

module.exports = router;
