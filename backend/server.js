


const express = require("express")
const app = express()
require("dotenv").config()
const connectDb = require("./config/connectionDb")
const cors = require("cors")

const PORT = process.env.PORT || 5000

connectDb()

app.use(express.json())

// app.use(cors({
//   origin: "https://apnirasoi-add-food-recipe.onrender.com",
//   credentials: true
// }))
app.use(cors())
app.use(express.static("public"))

// FIXED ROUTES
app.use("/user", require("./routes/user"))
app.use("/recipe", require("./routes/recipe"))

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`)
})







// const express = require("express")
// const cors = require("cors")
// const dotenv = require("dotenv")
// dotenv.config()

// const connectDb = require("./config/connectionDb")

// const app = express()

// // CONNECT DB
// connectDb()

// // MIDDLEWARES
// app.use(cors({
//  origin: "*",
//  methods: ["GET","POST","PUT","DELETE"],
//  credentials: true
// }))

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

// // ROUTES
// app.use("/api/users", require("./routes/user"))
// app.use("/api/items", require("./routes/item"))
// app.use("/api/shops", require("./routes/shop"))

// // TEST ROUTE
// app.get("/", (req,res)=>{
//  res.send("Backend running successfully 🚀")
// })

// // PORT (RENDER)
// const PORT = process.env.PORT || 5000

// app.listen(PORT, ()=>{
//  console.log("Server running on", PORT)
// })
