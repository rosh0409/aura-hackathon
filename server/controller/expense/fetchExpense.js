import User from "../../models/User.js";

function calc_sum(array){
  var total = 0
  // console.log(array)
  array.forEach((item)=>{
    console.log(item.amount)
    total = total + item.amount
    console.log(total)
  })
  return total
}

export const FetchExpense = async (req, res) => {
  try {
    //! getting user id by verifying the user through middleware
    const userID = req.id;

    //! if not userID will send failed request to the user
    if (!userID) {
      return res.status(200).json({
        status: "failed",
        message: "Please provide user ID :-(",
      });
    }

    //! finding the user by its ID from the db
    const userExpenses = await User.findById(userID);

    //! if something went wrong returning failed response to the user
    if (!userExpenses) {
      return res.status(200).json({
        status: "failed",
        message: "Invalid user ID :-(",
      });
    }

    const expense = userExpenses.expense;
    var total_expense = calc_sum(expense)
    console.log(total_expense)
    // total_expense = expense.map((item)=>total_expense + item.amount)
    const budget = userExpenses.budget;
    var total_budget = calc_sum(budget)
    // total_budget = budget.map((item)=>total_budget + item.amount)
    const income = userExpenses.income;
    var total_income = calc_sum(income)
    // total_income = income.map((item)=>total_income + item.amount)

    //! sending all the details of the user in response
    res.status(200).json({
      status: "success",
      message: "Expense of user found :-)",
      email: userExpenses.email,
      expense,
      budget,
      income,
      total_expense,total_income,total_budget
    });
  } catch (error) {
    return new Error(error.message);
  }
};
