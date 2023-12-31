import Users from "../../models/User.js";
//! when trying to filter the expenses based on date, the data object which is
//! input from the user will be passed through the date object again, hence converting into same format

export const saveBudget = async (req, res) => {
  try {
    //! fetching all the values from the body of the request
    const { category, budName, amount, date, duration } = req.body;
    if (!(category && budName && amount && date && duration)) {
      return res.status(400).json({
        status: "failed",
        message: "Please fill all the details :-(",
      });
    }
    //! when this route is called first a middle ware --> userVerification is called
    //! which verifies from the headers if the cookie is present or not and check if it is valid

    //! storing the id in a variable
    const id = req.id;
    //! fetching the user by using ID of the entries from mongodb
    const user = await Users.findById(id);
    console.log(user);
    if (!user) {
      return res.status(200).json({
        status: "failed",
        message: "No user found",
      });
    }
    // //!converting the string into the Date object
    // const format_date = Date(date);

    console.log(Date(date));
    const int_amount = Number(amount);
    //! Storing the expense info into the database
    const budget = user.budget
    let b_id = 0
    const length = budget.length
    if(!length){
      b_id = 1
    }else{
      b_id = budget[budget.length-1].b_id+1
      // console.log(e_id+"h")
    }



    user.budget.push({
      b_id,
      category,
      budName,
      amount: int_amount,
      duration,
      date, //! date object
    });
    user.save();
    return res.status(200).json({
      status: "success",
      message: "Budget added successfully",
    });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
