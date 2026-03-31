
var x;
var y;
x=Math.floor(Math.random()*6)+1;
y=Math.floor(Math.random()*6)+1;
while(x===y){
 y=Math.floor(Math.random()*6)+1;
}
document.querySelector(".img1").setAttribute("src", "./images/dice" + x + ".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + y + ".png");
if(x>y)
 document.querySelector("h1").innerHTML="🚩Player 1 winner";
else
 document.querySelector("h1").innerHTML="🚩Player 2 winner";