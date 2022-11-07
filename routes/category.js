const Category = require("../models/Category")
const { verifyTokenAndAuthorization, verifyToken, verifyTokenForAdmin } = require("./verifyToken")

const router= require("express").Router()

//POST CATEGORY
router.post("/", verifyTokenForAdmin, async (req, res)=> {
    const category= new Category(req.body)

    try{
        const newCategory= await category.save()
        res.status(200).json(newCategory)
    } catch(err) {
        res.status(500).json(err)
    }
})



//GET ALL CATEGORY
router.get("/", async (req, res) => {
    try{
        const foundCategory= await Category.find()
        
        res.status(200).json(foundCategory)
    } catch(err) {
        res.status(500).json(err)
    }
})


module.exports= router