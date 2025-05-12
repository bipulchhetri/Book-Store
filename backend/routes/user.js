const router = require("express").Router();
const user = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt= require ("jsonwebtoken");
const { authenticateToken } = require("./userAuth");
//Sign up function
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password, address } = req.body;

    // user name validation
    if (username.length < 4) {
      return res.status(400).json({ message: "user name must be > 3" });
    }
    // check username already exist
    const existUser = await user.findOne({ username: username });
    if (existUser) {
      return res.status(400).json({ message: "User name already exist" });
    }
    const existEmail = await user.findOne({ email: email });

    if (existEmail) {
      return res.status(400).json({ message: "Email already exist" });
    }
    // check password validation
    if (password.length <= 5) {
      res.status(500).json({ message: "password should be greater than 5" });
    }
    const hashpassword = await bcrypt.hash(password, 10);
    const newUser = new user({
      // here i made mistake i have to call same user as defined in require (new user)
      username: username,
      email: email,
      password: hashpassword,
      address: address,
    });
    await newUser.save();
    return res.status(200).json({ message: "signup succesfully" });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
});

// sign in api

router.post("/signin", async (req,res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await user.findOne({ username });
    if (!existingUser) {
      res.status(400).json({ message: "Invalid credentials" });
    }


    await bcrypt.compare(password, existingUser.password, (err, data) => {
      if (data) {
        const authClaims=[{name:existingUser.username},{role:existingUser.role}]
        const token=jwt.sign({authClaims},"bookstore",{
          expiresIn:"30d",
        })
        res.status(200).json({ id:existingUser.id,role:existingUser.role,token:token});
      } else {
        res.status(400).json({ message: "Invalid Credentials" });
      }
    });


  } catch(error) {
 res.status(500).json({ message: "Internal server error" });
  }
});



// get user information
router.get("/get-user-info",authenticateToken, async(req,res)=>{
  try{
const {id}=req.header;
const data=await user.findOne(id).select('-password');
return res.status(200).json(data);
  }
  catch(error){
    res.status(500).json({message:"Internal server error"})
  }
})

// update address
router.put("/update-adress",authenticateToken, async(req,res)=>{
  try{
    const{id}=req.headers;
    const {address}=req.body;
    await user.findByIdAndUpdate(id,{address:address});
    return res.status(200).json({message:"Adress updated succesully"})
  }
  catch(error)
  {
    res.status(500).json({message:"Intenal server error"})
  }
})
module.exports = router;
