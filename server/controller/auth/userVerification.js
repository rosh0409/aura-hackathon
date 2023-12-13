import jwt from "jsonwebtoken";

export const UserVerification = async (req, res, next) => {
  try {
    if (!req.headers?.cookie) {
      return res.status(400).json({
        status: "failed",
        message: "Not a verified user :-(",
      });
    }
    // console.log("token :: ", req.headers?.cookie.split("=")[1]);
    const token = req.headers?.cookie.split("=")[1];
    const decode = jwt.verify(token, "qwertyuiop", (err, user) => {
      if (err) {
        return res.status(400).json({
          status: "failed",
          message: "Invalid Token :-(",
        });
      }
      req.id = user.userID;
    });
  } catch (error) {
    return res.json({
      status: "failed",
      message: `${error.message}`,
    });
  }
  next();
};
