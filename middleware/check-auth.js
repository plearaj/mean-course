const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    req.UserData = { email: decodedToken.email, userId: decodedToken.userId };
    console.log()
    next();
  } catch (error) {
    res.status(401).json({ message: "You are not authenticated" });
  }

}
