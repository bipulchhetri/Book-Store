// const user = require("../models/user");
// // const user = require("../models/user");
// const router = require("express").Router();

// // singup
// router.post("/singup", async (req, res) => {
//   try {
//     const { username, email, password, address } = req.body;

//     // check username length is more than 4
//     if (username.lenght < 4) {
//       return res
//         .status(400)
//         .json({ message: "username should be grater than 4" });
//     }

//     // check user name already exsit
//     const existingUser = await user.findOne({ username: username });
//     if (existingUser) {
//       return res.status(400).json({ message: "user name is already exist" });
//     }

//     // check email already exist
//     const existingEmail = await user.findOne({ email: email });
//     if (existingEmail) {
//       return res.status(400).json({ message: "email name is already exist" });
//     }

//     // check password length
//     if (password.lenght <= 5) {
//       return res.status(400).json({ message: "Password must be 6 character" });
//     }

//     const NewUser = new user({
//       username: username,
//       email: email,
//       password: password,
//       address: address,
//     });
//     await NewUser.save();
//     return res.status(200).json({message:"Singup Sucessfully"});
//   } catch (error) {
//     res.status(500).json({ message: "Inernal server error" });
//   }
// });

// module.exports = router;


const User = require("../models/user");
const router = require("express").Router();

// Signup
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password, address } = req.body;

    // check username length
    if (username.length < 4) {
      return res.status(400).json({ message: "Username should be greater than 4 characters." });
    }

    // check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists." });
    }

    // check if email already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists." });
    }

    // check password length
    if (password.length <= 5) {
      return res.status(400).json({ message: "Password must be at least 6 characters long." });
    }

    const newUser = new User({
      username,
      email,
      password,
      address,
    });

    await newUser.save();
    return res.status(200).json({ message: "Signup successfully." });

  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;

