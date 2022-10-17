const mongoose= require("mongoose")

const CartSchema= new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        products: 
        // {
        //     type: Array,
        //     require: true
        // }
        [
            {
                productID: {
                    type: String
                },
                quantity: {
                    type: Number,
                    default: 1
                }
            }
        ]
    },
    {
        timestamps: true
    }
)

module.exports= mongoose.model("Cart", CartSchema)