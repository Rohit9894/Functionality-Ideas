const jwt = require("jsonwebtoken");
const authenticate = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];
  if (token) {
    const decoded = jwt.verify(token, "hush");
    if (decoded) {
      const userID = decoded.userID;
      req.body.usid = userID;
      next();
    } else {
      res.send({ msg: "please login" });
    }
  } else {
    res.send({ msg: "please login" });
  }
};
module.exports = authenticate;
