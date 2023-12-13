import multer from "multer";
import fs from "fs";

// image uploading storage
export let uniquefile = "";
export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync("public")) {
      fs.mkdirSync("public");
    }
    if (!fs.existsSync("public/uploads")) {
      fs.mkdirSync("public/uploads");
    }
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    uniquefile = uniqueSuffix + file.originalname;
    cb(null, uniqueSuffix + file.originalname);
    // console.log(file.path)
  },
});
