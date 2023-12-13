import Users from "../../models/User.js";
// import bcryptjs from "bcryptjs";
// import generateAuthToken from "./generateToken.js";
import { UserVerification } from "../auth/userVerification.js";

export const saveExpense = async (req, res) => {
  try {
    //! fetching all the values from the body of the request
    const { category, expName, amount, date } = req.body;

    //! when this route is called first a middle ware --> userVerification is called
    //! which verifies from the headers if the cookie is present or not and check if it is valid

    //! storing the id in a variable
    const id = req.id;
    //! fetching the user by using ID of the entries from mongodb
    const user = await Users.findById(id);

    

    user.expense.push(
        { 
            category, 
            expName, 
            amount, 
            date 
        }
    )

    user.save()



    return res.status(200).json({
        "response":req.body
    })    
  } catch (error) {
    return res.status(400).send(error.message);
  }
};