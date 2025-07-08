const express=require("express")
const router = express.Router()
const User=require("../models/user.js")
const wrapasync=require("../utils/wrapasync.js")
const passport = require("passport")
const { isLoggedIn, saveRedirectUrl } = require("../middleware.js")
const userController=require("../controller/users.js")

router.route("/signup")
.get(userController.signupuser)
.post( wrapasync(userController.postsignup));
   
router.route("/login")
.get(userController.renderlogin)
.post(
    saveRedirectUrl,
    passport.authenticate("local",
   {failureRedirect:"/login",failureFlash:true,}),
   userController.login
   )
  router.get("/logout",isLoggedIn,userController.logout)


module.exports=router