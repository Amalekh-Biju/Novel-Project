const express=require('express');
const app=express();
app.use(express())

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.post('/generate',(req,res)=>{
    req.send("Done")
})

app.listen(3000,()=>{
    console.log("")
})