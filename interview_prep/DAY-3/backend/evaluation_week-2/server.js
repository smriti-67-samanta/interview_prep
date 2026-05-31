const express = require("express")
//const mongoosh = require("mongoosh")

const app=express()
app.use(express.json())

app.use((req,res,next)=>{
 console.log("")
 next()
})

app.get("/",(req,res)=>{
    res.send("serer is running")
    console.log("server has started")
})

app.use((err,req,res,next)=>{
    console.log(error)
    res.status(err.status || 500).json({
    success:false,
 message:err.message
    })
})
const PORT=3000
app.listen(PORT,()=>{
    console.log("server is running")
})