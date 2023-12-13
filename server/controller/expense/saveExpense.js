import Users from "../../models/User.js";
//! when trying to filter the expenses based on date, the data object which is 
    //! input from the user will be passed through the date object again, hence converting into same format

export const saveExpense = async (req, res) => {
  try {
    //! fetching all the values from the body of the request
    const { category, expName, amount, date } = req.body;

    if( !(category&& expName&& amount&& date) ){
      return res.status(400).json({
        status:"failed",
        message:"Please fill all the details :-("
      })
    }
    //! when this route is called first a middle ware --> userVerification is called
    //! which verifies from the headers if the cookie is present or not and check if it is valid

    //! storing the id in a variable
    const id = req.id;
    //! fetching the user by using ID of the entries from mongodb
    const user = await Users.findById(id);
    console.log(user)
    if(!user){
      return res.status(200).json({
        status:"failed",
        message:"No user found"
      })
    }
    //!converting the string into the Date object
    const format_date = Date(date) 

    // console.log(Date())
    //! Storing the expense info into the database
    user.expense.push(
        { 
          category, 
          expName, 
          amount, 
          format_date //! date object
        }
    )
    user.save()
    const expense = user.expense
    console.log(expense)
    var total_expense = 0
    for(let i in expense){
      if(expense[i].category == category){
        total_expense = total_expense + expense[i].amount
      }
    }

    const budget = user.budget
    var budget_amount = 0;
    for(let i in budget){
      if(budget[i].category == category){
        budget_amount = budget_amount + budget[i].amount
      }
    }

    if(total_expense >= budget_amount){
      const message = "You have exceeded your budget"
    console.log(total_expense+" "+budget_amount+" "+ message)

    }else if(budget_amount - total_expense <= 0.1*budget_amount){
      const message = `You have used more than 90% of your budget for ${category}`
    console.log(message)

    }

    return res.status(200).json({
        "response":req.body
    })    
  } catch (error) {
    return res.status(400).send(error.message);
  }
};