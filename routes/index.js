const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')
const loginController = require('../controllers/login')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/getUser',userController.showUser)
router.post('/addUser',userController.addUser)
router.delete('/deleteUser',userController.deleteUser)
router.post('/updateUser',userController.updateUser)


router.post('/login',loginController.enter)
router.post('/register',loginController.createUser)
router.post('/delete',loginController.deleteUser)

module.exports = router;
