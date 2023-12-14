import jwt from "jsonwebtoken";

export const UserVerification = async (req, res, next) => {
  try {
    if (!req.headers?.cookie) {
      return res.status(400).json({
        status: "failed",
        message: "Not a verified user :-(",
      });
    }
    // console.log(req.headers)
    // console.log("token :: ", req.headers?.cookie.split("=")[1]);
    const token = req.headers?.cookie.split("=")[1];
    // console.log(process.env.JWTSECRETKEY)
    const decode = jwt.verify(token, process.env.JWTSECRETKEY , (err, user) => {
      if (err) {
        console.log(err)
        return res.status(400).json({
          status: "failed",
          message: "Invalid Token :-(",
          err
        });
      }
      req.id = user.userID;
      console.log(req.id+"here")
    });
  next();

  } catch (error) {
    return res.json({
      status: "failed",
      message: `${error.message}`,
    });
  }
};
