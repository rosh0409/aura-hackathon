import User from "../../models/User.js";

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
    const budget = userExpenses.budget;
    const income = userExpenses.income;

    //! sending all the details of the user in response
    res.status(200).json({
      status: "success",
      message: "Expense of user found :-)",
      email: userExpenses.email,
      expense,
      budget,
      income,
    });
  } catch (error) {
    return new Error(error.message);
  }
};
