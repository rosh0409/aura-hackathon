import Users from "../../models/User.js";
import bcryptjs from "bcryptjs";
import generateAuthToken from "./generateToken.js";

export const UserSignin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (user != null) {
        //! compare the passowrd with the hashed password in the database using bcryptjs
      const dePassword = await bcryptjs.compare(password, user.password);

    //! if the account is validated generate authtoken
      if (user.email && dePassword) {
        //! generate authtoken for 2 days
        const token = generateAuthToken(user._id, "2d");
        // if (req.cookies["quick-chat"]) {
        //   req.cookies["quick-chat"] = "";
        // }

        //! returning the response
        return res.status(200)
        //! creatig a new token for the session for a duration of 24 hour and sending to the client
          .cookie("UserSession", token, {
            path: "/",
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            httpOnly: true,
            sameSite: "strict",
          })
          .json({
            status: "success",
            message: "Login Successfull :-)",
            user,
            // token,
          });
      } else {
        //! failed validation --> incorrect password or wrong credentials
        return res.json({
          status: "failed",
          message: "Bad Credentials :-(",
        });
      }
    } else {
        //! else case when no user is found
      return res.json({
        status: "failed",
        message: "Bad Credentials :-(",
      });
    }
  } catch (error) {
    return res.status(400).send(error.message);
  }
};