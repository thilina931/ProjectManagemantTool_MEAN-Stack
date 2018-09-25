
const express = require('express');
const router = express.Router();
const cheakAuth = require ('../middelware/cheak-auth');
const UserController = require ('../controllers/user');

router.post('/signup',UserController.user_signup);

router.post('/login',UserController.user_login);



router.delete('/:userId',cheakAuth, UserController.delete_user);
//router for profile
router.get('/profile', (req,res,next)=>{
    
})


module.exports = router;

