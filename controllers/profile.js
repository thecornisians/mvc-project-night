

module.exports = {
    getProfile: async (req,res)=>{
        try{
            res.render('profile.ejs')
        } catch(err) {
            console.log(err)
        }
    }
    // getStartingWeight : async (req, res) => {
    //     const startingWeight = await users.find
    // }
}