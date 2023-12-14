import User from "../../models/User.js";

export const deleteIncome = async (req, res) => {
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
    const {i_id} = req.body;
    console.log("!")

    const user = await User.findById(userID)
    // console.log(user)
    console.log("hi")
    const income = user.income;
    console.log("!")

    // Assuming your array of JSON objects is named 'yourArray' and the index is 'indexToRemove'
    // const newArray = income.filter((item, index) => index !== i_id);
    let newArray = []

    for(let i=0;i<income.length;i++){
      // console.log(income[i].i_id+" "+i_id)
      if(await income[i].i_id !== i_id){
        // console.log("Inside")
        newArray.push(income[i])
      }
    }

    user.income = []
    console.log(newArray)
    user.income = newArray
    user.save()

    console.log(income)
    return res.status(200).json({
      status:"success",
      message:"Deletion successful"
    })
  } catch (error) {
    return res.json(error.message);
  }
};
