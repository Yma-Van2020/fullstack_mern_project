// 1. IMPORT DEPENDENCIES
const express = require('express')
const cookieParser = require("cookie-parser")
const cors = require('cors')
const port = 8000
const app = express()

// 1.5 CONNECT TO MONGODB
require("./server/config/mongoose.config")

// 2. CONFIGURE EXPRESS
app.use(cookieParser())
app.use(cors({credentials:true, origin:"http://localhost:3000"}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// 3. CONNECT ROUTES
const userRoutes = require("./server/routes/mood.routes")
userRoutes(app)

// 4. START EXPRESS SERVER
app.listen(port , ()=>{
    console.log(`EXPRESS LISTENING ON ${port}`)
})