import User from "../../models/User.js";

export const GetUser = async (req, res) => {
  try {
    const userID = req.id;
    const user = await User.findById(userID);
    if (!user) {
      return res.json({
        status: "failed",
        message: "User not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "User Found",
      user,
    });
  } catch (error) {
    return new Error(error.message);
  }
};
