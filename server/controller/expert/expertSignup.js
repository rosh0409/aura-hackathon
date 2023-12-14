import Expert from "../../models/Expert.js";
// import { uniquefile } from "../controller/auth/uploadImage.js";

// console.log(uniquefile);
export const expertSignup = async (req, res) => {
  try {
    //destructuring the body
    const { name, email, password, confPass, gender,expertise } = req.body;

    //!checking every variable contains value
    if (name && email && password && confPass && gender && expertise) {
      //!both password and confirm password should be same
      if (password === confPass) {
        if (!(await Expert.findOne({ email }))) {
          //! Creating user schema
          const user = new Expert({
            name,
            email,
            password,
            gender,
            expertise
          });

          //!saving user to database
          const expertStatus = await user.save();
          return res.status(200).json({
            status: "success",
            message: "Registration successfull :-) ",
            user: expertStatus,
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
