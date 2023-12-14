import jwt from "jsonwebtoken";

const generateAuthToken = (id, time) => {
  try {
    let token = jwt.sign({ userID: id }, process.env.JWTSECRETKEY, { expiresIn: time });
    return token;
  } catch (error) {
    return new Error(error.message);
  }
};

export default generateAuthToken;
