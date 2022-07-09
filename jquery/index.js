$("h1").addClass("big-title mar"); //add class to h1 tag
//$("a").attr("href", "https://www.youtube.com/"); redirect a href link

//changes h1 color to red on click
$("button").click(function(){
$("h1").toggle();
});

// for (let index = 0; index < 5; index++) {
//     document.querySelectorAll("button")[index].addEventListener("click", function() {
//         document.querySelector("h1").style.color="red";
//     });
    
// }

//jquery code to change the color of h1 applies to ALL buttons on the page
$("button").click(function(){
$("h1").css("color", "blue");

});

//jquery code to detect key inputs in the input box, (can be applied to the entire page by changing "input" to document)
$("input").keypress(function(event){
console.log(event.key);
$("h1").text(event.key); //code that changes text of h1
});

$("h1").on("mouseover", function(){
$("h1").css("color","purple");

});
//before tag adds a button before h1 while after tag creates on after 
$("h1").before("<button>New</button>");
// prepend("") adds element after the h1 tag but before the text 
// append("") adds the element after the text of the h1