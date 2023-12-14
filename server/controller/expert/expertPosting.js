import Expert from "../../models/Expert.js";

export const expertPosting = async (req, res) => {
  try {
    const { title,path,caption} = req.body;
    if ((title && path && caption)){
        //! obtaining the id of the expert
        const userID = req.id

        // console.log(userID)
        //! fetching the details using ID
        const expert = await Expert.findById(userID)
        console.log(expert)

        //! creating a unique id for the post
        const posts = expert.post
        let post_id = 0
        const length = posts.length
        if(!length){
        post_id = 1
        }else{
        post_id = posts[posts.length-1].post_id+1
        }

        // console.log(post_id)
        expert.post.push({
            post_id,
            title,
            path,
            caption,
            "date":new Date(),
            comments:[]
        })
        expert.save()

        return res.status(200).json({
            status:"success",
            message:"Post uploaded succesfully"
        })
    }else{
      return res.status(200).json({
        status:"Failed",
        message:"Unable to complete the request"
      })
    }
  } catch (error) {
    return res.status(400).json({
        status:"Failed",
        message:"Some error occured, please try again later 🙏"
    })
  }
};
