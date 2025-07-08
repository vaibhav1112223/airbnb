const User=require("../models/user.js")

module.exports.signupuser=(req,res)=>{
    res.render("listings/user.ejs")
}
module.exports.postsignup=async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const newuser = new User({ username, email });
    const reguser = await User.register(newuser, password);

    // Wrap req.login in a Promise so we can await it
    await new Promise((resolve, reject) => {
      req.login(reguser, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });

    req.flash("success", "welcome to waanderlust.");
   return res.redirect("/listings");

  } catch (e) {
    req.flash("error", "try again.");
    res.redirect("/signup");
  }
}
module.exports.renderlogin=(req,res)=>{
    res.render("listings/login.ejs")
}
module.exports.login=async(req,res)=>{
     req.flash("success","welcome to waanderlust.")
let redirectUrl=res.locals.redirectUrl || "/listings"
res.redirect(redirectUrl)}

module.exports.logout=(req,res,next)=>{

    req.logOut((err)=>{
        if(err){
            return next(err)
        }
         req.flash("success","you are logged out.")
        return res.redirect("/listings")

    })
}