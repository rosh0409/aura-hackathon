import jwt from "jsonwebtoken";

export const userLogout = async (req, res, next) => {
      const prevToken = req.headers?.cookie.split("=")[1];
      console.log(prevToken)
      if (!prevToken) {
        return res.status(400).json({
          status: "failed",
          message: "Could not found :-(",
        });
      }
      jwt.verify(prevToken, "qwertyuiop", (err, user) => {
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
    };
export default userLogout;