const jwt = require('jsonwebtoken')
const {secret} = require('../configs/auth.json')
module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    // console.log(token);
    if (!token) return res.status(401).json('Please inform your token');
    
    jwt.verify(token, secret, (error, decoded) => {
      if (error) return res.status(401).json(error)
    //   console.log(decoded);
      req.userID = decoded.ID
      next();
    })
}