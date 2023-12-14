import User from "../../models/User.js";

export const deleteBudget = async (req, res) => {
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
    const {b_id} = req.body;
    console.log("!")

    const user = await User.findById(userID)
    // console.log(user)
    console.log("hi")
    const budget = user.budget;
    console.log("!")

    // Assuming your array of JSON objects is named 'yourArray' and the index is 'indexToRemove'
    // const newArray = budget.filter((item, index) => index !== i_id);
    let newArray = []

    for(let i=0;i<budget.length;i++){
      // console.log(budget[i].i_id+" "+i_id)
      if(await budget[i].b_id !== b_id){
        // console.log("Inside")
        newArray.push(budget[i])
      }
    }

    user.budget = []
    console.log(newArray)
    user.budget = newArray
    user.save()

    console.log(budget)
    return res.status(200).json({
      status:"success",
      message:"Deletion successful"
    })
  } catch (error) {
    return res.json(error.message);
  }
};
