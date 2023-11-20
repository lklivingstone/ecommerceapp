const Cart = require("../models/Cart")
const { verifyTokenAndAuthorization, verifyToken, verifyTokenForAdmin } = require("./verifyToken")

const router= require("express").Router()

//POST CART
router.post("/", verifyToken, async (req, res)=> {
    const cart= new Cart(req.body)

    try{
        const newCart= await cart.save()
        res.status(200).json(newCart)
    } catch(err) {
        res.status(500).json(err)
    }
})

//UPDATE CART
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try{
        const updatedCart= await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },
        {
            new: true
        })
        res.status(200).json(updatedCart)
    } catch(err) {
        res.status(500).json(err)
    }
})

//DELETE CART
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart Deleted")
    }catch(err) {
        res.status(500).json(err)
    }
})

//GET CART
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const foundCart= await Cart.findOne({userId: req.params.userId})
        res.status(200).json(foundCart)
    } catch(err) {
        res.status(500).json(err)
    }
})

//GET ALL CARTS
router.get("/", verifyTokenForAdmin, async (req, res) => {
    try{
        const foundCarts= await Cart.find()
        
        res.status(200).json(foundCarts)
    } catch(err) {
        res.status(500).json(err)
    }
})


module.exports= router