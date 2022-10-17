const router= require("express").Router()
require("dotenv/config")
const stripe= require("stripe")(process.env.STRIPE_KEY)

router.post("/payment", (req, res)=> {
    
})

module.exports= router