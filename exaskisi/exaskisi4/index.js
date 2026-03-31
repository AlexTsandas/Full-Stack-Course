import express from "express";
const app=express();
const port=3000;

app.get("/", (req,res) => {
 res.send("<h1>Hello World!</h1>");
});
app.get("/about", (req,res) => {
 res.send("<h2>I am a Gorilla</h1>");
});

app.get("/contact", (req,res) => {
 res.send("<h1>my phone number is secret nigg</h1>");
});


app.listen(port, () => {
 console.log(`Server running on ${port}`);
});

