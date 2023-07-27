const express = require('express');
const router = express.Router();
const {loginController,registerController} = require('../controllers/authController');
const { isAdmin, requireSignIn } = require("../middlewares/authMiddleware.js");

//register route (in this case only admin can add another admin)
router.post("/add_admin",requireSignIn,isAdmin,registerController);

// Login route
router.post('/login', loginController);

//protected route for admin authentication
router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
  });

module.exports = router;
