var gamePattern=[];
var buttonColors=["red","blue","green","yellow"];
var userClicked=[];
var level=0;
var x=0;
var started = false;
function nextSequence(){
    userClicked= [];
    level=level+1;
    $("h1").text("Level " + level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosen=buttonColors[randomNumber];
    gamePattern.push(randomChosen);
    $("#" + randomChosen).fadeOut(100).fadeIn(100);
    playSound(randomChosen);
    
    
}

$(".btn").click(function (){
    var userChosen=$(this).attr("id");
    userClicked.push(userChosen);
    animatePress(userChosen);
    playSound(userChosen);
    checkAnswer(userClicked.length -1);
});

function playSound(name){
    var audio=new Audio("./sounds/" + name +".mp3");
    audio.play();
}

function animatePress(currentColor){
     $("#" + currentColor).addClass("pressed");
     setTimeout(function (){
      $("#" + currentColor).removeClass("pressed")},100);
}
  $(document).keypress(function() {
  if (!started) {
    nextSequence();
    started = true;
  }
});

function checkAnswer(currentLevel){
   if(userClicked[currentLevel]===gamePattern[currentLevel]){
    console.log("success");
    if(userClicked.length ===gamePattern.length){

        
        setTimeout(function () {
          nextSequence();
        }, 1000);
    }
    }
   else{
    console.log("failure");
    playSound("wrong");
     $("body").addClass("game-over");
    setTimeout(function (){
    $("body").removeClass("game-over")},100);
    $("h1").text("Game Over, Press Any Key To Restart");
    startOver();
    
}

}

function startOver(){
    
    level=0;
    gamePattern=[];
    started=false;
    
}
