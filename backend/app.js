import express from "express"
import route from "./routes/routes.js"
import router from "./routes/userRoutes.js"
import cors from "cors"
import  expressFileUpload from "express-fileupload"
// const fileupload = require("express-fileupload")
const PORT = 4000

const app = express()


//real deal

app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(express.json())
app.use(expressFileUpload())
app.use((req, res, next) => {
    res.header({
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        // "Access-Control-Allow-Credentials": true,
        // 'Allow-Control-Allow-Headers': "Origin, Content-Type, Authorization, x-id, Content-Length, X-Requested-width",
        // "Allow-Control-Allow-Methods": 'GET, POST, PUT, DELETE, OPTIONS'

    })
    next()
})
app.use(route)
app.use(router)
app.listen(PORT || process.env.PORT, () => console.log("server running at port:", PORT));