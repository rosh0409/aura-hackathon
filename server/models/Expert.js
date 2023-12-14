import mongoose from "mongoose";
import bcryptjs from 'bcryptjs'

const ExpertS = new mongoose.Schema(
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
    expertise:{
        type:String,
        required:true
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    post:[
      //! id of the post
      //! title
      //! url for the image uploaded
      //! text of the post 
      //! date of posting
      //! comments
    ]
  },
  {
    timestamps: true,
  }
);

ExpertS.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }
    // hash paaword
    console.log("1");
    const salt = await bcryptjs.genSalt(10);
    const hashPass = await bcryptjs.hash(this.password, salt);
    console.log(hashPass);
    this.password = hashPass;
    next();
  } catch (error) {
    console.log(error.message);
  }
});

export default mongoose.model("expert", ExpertS);
