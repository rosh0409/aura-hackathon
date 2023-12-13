import Users from "../../models/User.js";

export const UserSignup = async (req, res) => {
  try {
    //destructuring the body
    const { name, email, password, confPass, gender } = req.body;

    //!checking every variable contains value
    if (name && email && password && confPass && gender) {
      //!both password and confirm password should be same
      if (password === confPass) {
        if (!(await Users.findOne({ email }))) {
          //! Creating user schema
          const user = new Users({
            name,
            email,
            password,
            gender,
          });

          //!saving user to database
          const userStatus = await user.save();
          return res.status(200).json({
            status: "success",
            message: "Registration successfull :-) ",
            user: userStatus,
          });
        } else {
          return res.status(400).json({
            status: "failed",
            message: "Email already exists :-(",
          });
        }
      } else {
        return res.status(400).json({
          status: "failed",
          message: "Password and Confirm Password does not match :-(",
        });
      }
    } else {
      return res.status(400).json({
        status: "failed",
        message: "Please fill all the fields :-(",
      });
    }
  } catch (error) {
    return new Error(error.message);
  }
};
