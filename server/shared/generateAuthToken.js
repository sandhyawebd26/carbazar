const jwt = require("jsonwebtoken");

function generateAuthToken(user) {
  const token = jwt.sign(
    {
      _id: user._id.toString(),
      userName: `${user.fullname}`,
    },
    process.env.TOKEN_KEY,
    {
      expiresIn: "2d",
    }
  );
  return token;
}

module.exports = generateAuthToken;
