const express=require("express")
const app = express()
const path=require("path")
app.use(express.json())
app.use(express.static(path.join(__dirname,"build")))

require("dotenv").config()

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"build",'index.html'))

})

const port=process.env.PORT ||5000

app.listen(port,async (req,res)=>{
    console.log(`listening on ${port}`)
})
