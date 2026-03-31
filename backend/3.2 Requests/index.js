import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send("<h1>hello world</h1>");
})
app.get("/contact", (req,res) => {
    res.send("<h1>99752113</h1>");
})
app.get("/about", (req,res) => {
    res.send("<h1>info</h1>");
})


app.listen(port,() => {
    console.log(`Server running on port ${port}.`);
})  