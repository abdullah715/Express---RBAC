require("dotenv").config();
var router = require("express").Router();

var jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs/dist/bcrypt");

const User = require("../model/user");
const Roles = require("../model/roles");
// Register

function getScopes(roles = []) {
  return roles.reduce((agg, e) => {
    let fil = Roles.filter((each) => each.name == e);
    console.log(e, fil.length > 0 ? fil[0].scope : []);
    let ret = fil.length > 0 ? fil[0].scope : [];
    return [...agg, ...ret];
  }, []);
}

router.post("/register", (req, res) => {
  // our register logic goes here...
});

// login
router.post("/login", async (req, res) => {
  // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const [foundUser] = User.filter((e) => e.email == email);

    // if (user && (await bcrypt.compare(password, user.password))) {
    if (foundUser && password == foundUser.password) {
      // Create token
      let user = {};
      Object.assign(user, foundUser);

      delete user["password"];
      user["scope"] = getScopes(user.role);

      delete user["password"];
      const token = jwt.sign(user, process.env.TOKEN_KEY, {
        expiresIn: "2h",
      });

      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
      return;
    }
    res.status(400).send("Invalid Credentials");
    return;
  } catch (err) {
    res.status(400).send("Error Login ");
    console.log(err);
    return;
  }
});

module.exports = router;
