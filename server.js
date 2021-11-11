const express = require('express')
const app = express()
const dbConnect=require("./config/connectDB")
require('dotenv').config()
dbConnect()

//middlewares
app.use(express.json())
app.use('/user/',require("./routes/user"))
app.use('/article',require("./routes/ArticleNutri"))
app.use('/profil',require("./routes/userNutri"))

const PORT=process.env.PORT

app.listen(PORT, (err) => err?console.log(err):console.log(`app listening on port ${PORT}!`))
