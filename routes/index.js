const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/getUser',userController.showUser)


router.post('/addUser',userController.addUser)
router.delete('/deleteUser',userController.deleteUser)
router.post('/updateUser',userController.updateUser)

module.exports = router;
