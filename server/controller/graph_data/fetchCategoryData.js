import User from '../../models/User.js'

export const fetchCategoryData = async (req, res) => {
  try {
        //! obtaining the id of the expert
        const userID = req.id
        console.log(userID)
        //! fetching the details using ID
        const user = await User.findById(userID)
        console.log(user)
        
        const expenses = user.expense
        console.log(expenses)

        var categoryData = {
            "Vacation":0,
                "Grocery":0,
                "Medical":0,
                "Traveling":0,
                "Vehical":0,
                "Electricity":0,
                "Entertainment":0,
                "Subscription":0,
                "Home Rent":0
        }
        var categories = [
                "Vacation",
                "Grocery",
                "Medical",
                "Traveling",
                "Vehical",
                "Electricity",
                "Entertainment",
                "Subscription",
                "Home Rent"]

        for(let i in categories){
            for(let j in expenses){
                if(categories[i] === expenses[j].category){
                    categoryData[categories[i]] = categoryData[categories[i]] + expenses[j].amount
                }
            }
        }

        console.log(categoryData)

        return res.status(200).json({
            status:"success",
            message:"Date fetch",
            categoryData
        })
  } catch (error) {
    return res.status(400).json({
        status:"Failed",
        message:"Some error occured, please try again later 🙏"
    })
  }
};
