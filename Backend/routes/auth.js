const express = require('express');
const User = require("../models/user");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var fetchuser =require("../middleware/fetchuser")

const JWT_secrate = 'F$ckY0uH@cker';

// path is post "/api/auth/createuser"
router.post("/createuser",
  [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'password must be atleast 5 characters').isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "Sorry a user with this email already exists" })
      }
      const salt = await bcrypt.genSalt(10);
      const securepass = await bcrypt.hash(req.body.password, salt);
      //chake is is alredi exisit
      user = await User.create({
        name: req.body.name,
        password: securepass,
        email: req.body.email,
      });
      // .then(user =>res.json(user)).catch(err=>{console.log(err)
      //     res.json({error:"bokachoda re"})})
      const data = {
        user: {
          id: user.id
        }
      }
      const authtoken = jwt.sign(data ,JWT_secrate );
      return res.json({authtoken});
      // res.send("User created");
    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Server Error");
    }
  }
);

//route 2 authenticatation a user and end point is /api/auth/login
router.post("/login", [
  body("email", "enter a valid email").isEmail(),
  body("password", "enter a valid pass").exists()
],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "tikh takh dey bokachoda" })
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ error: 'The password does not match' })
      }
      const data = {
        user: {
          id: user.id,
        }
      }
      const authtoken = jwt.sign(data, JWT_secrate);
      return res.json({ authtoken });
    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Server Error boka");
    }
  });


 //router3 get login user data and end point is /api/auth/getuser: login requre
 router.post("/getuser",fetchuser,async (req, res) => {

 try {
  userID=req.user.id;
  const user =await User.findById(userID).select("-password")
  res.send(user)
 } catch (error) {
  console.error(error.message);
  res.status(500).send("gandu");
 }
});

module.exports = router;


