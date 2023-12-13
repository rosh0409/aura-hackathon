import mongoose from "mongoose";

const UserS = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    income: [],
    budget: [],
    expense: [],
  },
  {
    timestamps: true,
  }
);

UserS.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }
    // hash paaword
    const salt = await bcryptjs.genSalt(10);
    const hashPass = await bcryptjs.hash(this.password, salt);
    console.log(hashPass);
    this.password = hashPass;
    next();
  } catch (error) {
    console.log(error.message);
  }
});

export default mongoose.model("user", UserS);
