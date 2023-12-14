import Expert from "../../models/Expert";

export const dxpertPosting = async (req, res) => {
  try {
    const { title,path,caption} = req.body;
    if (!(title && path && caption)){
        //! obtaining the id of the expert
        const userID = req.id

        //! fetching the details using ID
        const expert = Expert.findById(userID)

        //! creating a unique id for the post
        const posts = expert.post
        let post_id = 0
        const length = posts.length
        if(!length){
        post_id = 1
        }else{
        post_id = posts[posts.length-1].post_id+1
        }


        expert.post.push({
            post_id,
            title,
            path,
            text,
            "date":new Date(),
            comments:[]
        })
        expert.save()

        return res.status(200).json({
            status:"success",
            message:"Post uploaded succesfully"
        })
    }
  } catch (error) {
    return res.status(400).message({
        status:"Failed",
        message:"Some error occured, please try again later 🙏"
    })
  }
};
