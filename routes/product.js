const Product = require("../models/Product")
const { verifyTokenForAdmin } = require("./verifyToken")
const router= require("express").Router()

//ADD NEW PRODUCT
router.post("/", verifyTokenForAdmin, async (req, res) => {
    const product= new Product(req.body)
    try{
        const newProduct= await product.save()
        res.status(200).json(newProduct)
    }catch(err) {
        res.status(500).json(err)
    }
})

//UPDATE PRODUCT
router.put("/:id", verifyTokenForAdmin, async (req, res) => {
    try{
        const updatedProduct= await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },
        {
            new: true
        })
        res.status(200).json(updatedProduct)
    } catch(err) {
        res.status(500).json(err)
    }
})

//DELETE PRODUCT
router.delete("/:id", verifyTokenForAdmin, async (req, res) => {
    try {
        const deletedProduct= await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product Deleted")
    } catch(err) {
        res.status(500).json(err)
    }
})

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
    try {
        const foundProduct= await Product.findById(req.params.id)
        if (foundProduct) {
            res.status(200).json(foundProduct)
        }
        else {
            res.status(401).json("Product does not exist")
        }
    } catch(err) {
        res.status(500).json(err)
    }
})

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
    const queryNew= req.query.new
    const queryCategory= req.query.category
    try{
        let foundProducts;

        if (queryNew) {
            foundProducts= await Product.find().sort({ createdAt: -1}).limit(1)
        }
        else if (queryCategory) {
            foundProducts= await Product.find({
                categories: {
                    $in : [queryCategory]
                }
            })
        }
        else {
            foundProducts= await Product.find()
        }

        res.status(200).json(foundProducts)
    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports= router