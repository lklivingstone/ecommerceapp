const mongoose= require("mongoose")

const SliderItemsSchema= new mongoose.Schema(
    {
        image: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true

        },
        category: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
)

module.exports= mongoose.model("SliderItems", SliderItemsSchema)