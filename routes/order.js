const Order = require("../models/Order")
const { verifyTokenAndAuthorization, verifyTokenForAdmin } = require("./verifyToken")

const router= require("express").Router()

router.post("/", verifyTokenAndAuthorization, async (req, res) => {
    const order= new Order(req.body)

    try {
        const savedOrder= await order.save()
        res.status(200).json(savedOrder)
    } catch(err) {
        res.status(500).json(err)
    }
})


router.put("/:id", verifyTokenForAdmin, async (req, res) => {
    try{
        const foundOrder= await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },
        {
            new: true
        }
    )
    res.status(200).json("Order Updated")
    } catch(err) {
        res.status(500).json(err)
    }
})



router.delete("/:id", verifyTokenForAdmin, async (req, res) => {
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order Deleted")
    } catch(err) {
        res.status(500).json(err)
    }
})


router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const foundOrder= await Order.find({ userId: req.params.id})
        res.status(200).json(foundOrder)
    } catch(err) {
        res.status(500).json(err)
    }
})



router.get("/", verifyTokenForAdmin, async (req, res) => {
    try {
        const foundOrders= await Order.find()
        res.status(200).json(foundOrders)
    } catch(err) {
        res.status(500).json(err)
    }
})


module.exports= router 