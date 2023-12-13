import jwt from "jsonwebtoken";

export const userLogout = async (req, res, next) => {
  try {
    const prevToken = req.headers?.cookie.split("=")[1];
    console.log(prevToken)
    if (!prevToken) {
      return res.status(400).json({
        status: "failed",
        message: "Could not found :-(",
      });
    }
    jwt.verify(prevToken, process.env.JWTSECRETKEY, (err, user) => {
      if (err) {
        return res.status(403).json({
          status: "failed",
          message: "Invalid Token :-(",
        });
      }
      res.clearCookie("UserSession");
      // req.cookies["usersession"] = "";
      return res.clearCookie("UserSession")
        .status(200).json({
          status: "success",
          message: "Successfully Logged Out :-)",
        });
    });
  } catch (error) {
    return res.status(400).json({
      status:"failed",
      message:"Some error occured, please try again later :-("
    })
  }

};
export default userLogout;