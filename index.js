const express= require("express")
const app= express()
const mongoose= require("mongoose")
require("dotenv/config")
const userRoute= require("./routes/user")
const authRoute= require("./routes/auth")
const productRoute= require("./routes/product")
const categoryRoute= require("./routes/category")
const cartRoute= require("./routes/cart")
const sliderItemsRoute= require("./routes/sliderItems")
const orderRoute= require("./routes/order")
const stripeRoute= require("./routes/stripe")



app.get("/", (req, res)=> {
    res.json("server")
})

app.use(express.json())

mongoose.connect(
    process.env.DB_CONNECTION
    ).then(
        () => console.log("Connected to DB")
        ).catch(
            (err)=> {
                console.log(err)
            })


app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/products", productRoute)
app.use("/api/categories", categoryRoute)
app.use("/api/cart", cartRoute)
app.use("/api/sliderItems", sliderItemsRoute)
app.use("/api/order", orderRoute)
app.use("/api/checkout", stripeRoute)



app.listen(process.env.PORT || 5000, ()=> {
    console.log("Listening on port: 5000")
})