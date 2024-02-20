const express = require("express")

const app = express();
const port = 80;
// for Server static files 
app.use('/static', express.static('static'))


app.get("/", (req,res)=>{
    res.send("This is home of my first express app with Herry")
});

app.get("/about", (req,res)=>{
    res.send("This is about page of my first express app with MSP")
});
app.post("/about", (req,res)=>{
    res.send("This is about page of my first express app with MSP")
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`)
})