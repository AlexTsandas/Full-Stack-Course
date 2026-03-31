import express from "express";
import  bodyParser from "body-parser";


const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    const today = new Date("August 22, 1975 23:15:30");
    const day = today.getDay();
    let adv="a weekday";
    let type="work hard"; 
    console.log(day);
    if(day === 0 || day === 6){
    adv="the weekend";
     type="have fun"
   }
   res.render("index.ejs",{ send:adv,
   activity:type, });
   
});




app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});