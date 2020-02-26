const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

exports.auth = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        msg: "Invalid Credentials"
      });
    }
    const isMatch = await bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }
    const payload = {
      user: {
        id: user._id
      }
    };

    jwt.sign(payload, process.env.jwtSecret, (err, token) => {
      res.json({ token });
    });
  } catch (err) {
    res.status(500).send("server error");
  }
};
