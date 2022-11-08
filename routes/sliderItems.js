const SliderItems = require("../models/SliderItems")
const { verifyTokenAndAuthorization, verifyToken, verifyTokenForAdmin } = require("./verifyToken")

const router= require("express").Router()

//POST SLIDER ITEMS
router.post("/", verifyTokenForAdmin, async (req, res)=> {
    const sliderItems= new SliderItems(req.body)

    try{
        const newSliderItems = await sliderItems.save()
        res.status(200).json(newSliderItems)
    } catch(err) {
        res.status(500).json(err)
    }
})



//GET ALL SLIDER ITEMS
router.get("/", async (req, res) => {
    try{
        const foundSliderItems = await SliderItems.find()
        
        res.status(200).json(foundSliderItems)
    } catch(err) {
        res.status(500).json(err)
    }
})


module.exports= router