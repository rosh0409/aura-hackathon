import Users from "../../models/User.js";
//! when trying to filter the expenses based on date, the data object which is
//! input from the user will be passed through the date object again, hence converting into same format

export const saveIncome = async (req, res) => {
  try {
    //! fetching all the values from the body of the request
    const { source, amount, date } = req.body;
    if (!(source && amount && date)) {
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
    // console.log(user);
    if (!user) {
      return res.status(200).json({
        status: "failed",
        message: "No user found",
      });
    }
    //!converting the string into the Date object
    const format_date = Date(date);

    // console.log(Date());

    //! Storing the expense info into the database
    const income = user.income
    let i_id = 0
    const length = income.length
    if(!length){
      i_id = 1
    }else{
      i_id = income[income.length-1].i_id+1
      // console.log(e_id+"h")
    }

    const budget = user.income.push({
      i_id,
      source,
      amount,
      format_date, //! date object
    });
    user.save();
    return res.status(200).json({
      status: "success",
      message: "Income added successfully",
    });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
