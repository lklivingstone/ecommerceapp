const router= require("express").Router()
const User = require("../models/User")
const CryptoJS= require("crypto-js")
const { verifyTokenAndAuthorization, verifyTokenForAdmin }= require("./verifyToken")

//GET USER DATA
router.get("/find/:id", verifyTokenForAdmin, async (req, res) => {
    try {
        const foundUser= await User.findById(req.params.id)
        const {password, ...others }= foundUser._doc
        res.status(200).json(others)
    } catch(err) {
        res.status(500).json(err)
    }
})

//GET ALL USERS DATA
router.get("/", verifyTokenForAdmin, async (req, res) => {
    const query = req.query.new
    try{
        const foundUsers= query ? await User.find().sort({_id: -1}).limit(1) : await User.find()
        // foundUsers= foundUsers.map((user)=> {
        //     const { password, ...others }= user._doc
        //     user= others
        // })
        res.status(200).json(foundUsers)
    } catch( err ) {
        res.status(500).json(err)
    }
})

//UPDATE USER BY ID
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
        req.body.password= CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTO_KEY).toString()
    }

    try {
        const updatedUser= await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },
        {
            new:true
        })
        res.status(200).json(updatedUser)
    } catch (err) {
        res.status(500).json(err)
    }
})

//DELETE USER BY ID
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try{
        const foundUser= await User.findById(req.params.id)
        const OriginalPassword= CryptoJS.AES.decrypt(foundUser.password, process.env.CRYPTO_KEY).toString(CryptoJS.enc.Utf8)
        if (foundUser.username === req.body.username && OriginalPassword === req.body.password) {
            const deletedUser= await User.findByIdAndDelete(req.params.id)
            res.status(200).json("User has been deleted")
        }
        else {
            res.status(403).json("You are not Authorized")
        }
        
    } catch(err) {
        res.status(500).json(err)
    }
})

//GET ABOUT USER
router.get("/aboutusers", verifyTokenForAdmin, (req, res) => {

})

module.exports= router