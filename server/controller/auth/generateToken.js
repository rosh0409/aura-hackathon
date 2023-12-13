import jwt from "jsonwebtoken";

const generateAuthToken = (id,time) => {
  try {
    let token = jwt.sign(
      { userID: id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: time }
    );
    return token;
  } catch (error) {
    return console.log(error.message);
  }
};

export default generateAuthToken;
