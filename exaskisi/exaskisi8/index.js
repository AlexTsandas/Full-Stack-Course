import express from "express";
import bodyParser from "body-parser";


const port = 3000;
const app=express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
const numberday=new Date().getDay();
var day;
function findDay(req,res,next){
    if(numberday < 5){
      day="Hey!It's a weekday,it's time to work hard!";
    }
    else{
      day="Hey!It's a weekend,it's time to have fun!";
    }
    next();
}
app.use(findDay);
app.get("/", (req,res) => {
  res.render("views/index.ejs",
    {day: req.body["day"]}
  );
  });

app.listen(port, () => {
console.log(`Listenning on ${port}`);
});