import User from "../../models/User.js";

export const deleteExpense = async (req, res) => {
  try {
    //! getting user id by verifying the user through middleware
    const userID = req.id;
    console.log("!")

    //! if not userID will send failed request to the user
    if (!userID) {
      return res.status(200).json({
        status: "failed",
        message: "Please provide user ID :-(",
      });
    }
    console.log("!")

    //! destructuring
    const {e_id} = req.body;
    console.log("!")

    const user = await User.findById(userID)
    // console.log(user)
    console.log("hi")
    const expense = user.expense;
    console.log("!")

    // Assuming your array of JSON objects is named 'yourArray' and the index is 'indexToRemove'
    // const newArray = expense.filter((item, index) => index !== e_id);
    let newArray = []

    for(let i=0;i<expense.length;i++){
      // console.log(expense[i].e_id+" "+e_id)
      if(await expense[i].e_id !== e_id){
        // console.log("Inside")
        newArray.push(expense[i])
      }
    }

    user.expense = []
    console.log(newArray)
    user.expense = newArray
    user.save()

    console.log(expense)
    return res.status(200).json({
      status:"success",
      message:"Deletion successful"
    })
  } catch (error) {
    return res.json(error.message);
  }
};
