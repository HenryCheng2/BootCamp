var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started =false;
$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });
function nextSequence(){
    userClickedPattern = [];
    level++;
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber]; //gets the color associated with the number 
    
    gamePattern.push(randomChosenColour); //add color to pattern
    playSound(randomChosenColour);
    $("h1").text("level "+level);
    
    
}
$(".btn").click(function(){ //handles if the button was clicked send color select to function play sound to determine which sound to play
    //console.log(this);
    var userChosenColour = $(this).attr("id"); //gets the id of the button that was clicked

    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});



function playSound(name){
    $("#" + name).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
// $("#green").click(function(){
    
//     
//     var G =new Audio("sounds/green.mp3");
//     G.play();
// });

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
setTimeout(function() {
    $("#"+currentColour).removeClass("pressed");
  }, 100 );
}
function startOver(){
    gamePattern=[];
    level=0;
    started =false;

}
function checkAnswer(currentlevel){
    console.log(currentlevel);
if(gamePattern[currentlevel]===userClickedPattern[currentlevel]){
    console.log("correct");
    if (userClickedPattern.length === gamePattern.length){
        setTimeout(function() {
            nextSequence();
          }, 1000);
        
    }
}
    
else{
console.log("wrong");
var G =new Audio("sounds/wrong.mp3");
 G.play();
$("body").addClass("game-over");
setTimeout(function() {
    $("body").removeClass("game-over");
}, 200);
$("h1").text("Game Over, Press Any Key to Restart");
startOver();
}
}
