/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/


/* Give the <body> element a background of #bdc3c7*/
var getBody = document.getElementsByTagName("body");
getBody[0].style.backgroundColor = "#bdc3c7";

/* Make the <h1> element #9b59b6*/
var getAllH1tags = document.getElementsByTagName("h1");
getAllH1tags[0].style.color = "#9b59b6";


/* Make all <h2> elements orange */
var h2Element = document.getElementsByTagName("h2");
for (var i=0; i<h2Element.length; i++)
{
    h2Element[i].style.color = "orange"
}



/* Make all <li> elements blue(pick your own hexadecimal blue)*/
var liTags = document.getElementsByTagName("li");
for (var i=0; i<liTags.length; i++)
{
     liTags[i].style.color = "#22A4B6"
}

/*Change the background on every paragraph to be yellow*/
var allPtags = document.getElementsByTagName("p");
for (var i=0; i<allPtags.length; i++)
{
    allPtags[i].style.backgroundColor = "yellow"
}


/*Make all inputs have a 3px red border*/
var allInputs = document.getElementsByTagName("input");
for (var i=0; i<allInputs.length; i++)
{
    allInputs[i].style.border = "3px solid red";
}


/* Give everything with the class 'hello' a white background*/
var classHello = document.getElementsByTagName("hello");
for ( x=0; x<classHello.length; x++)
{
    classHello[x].style.backgroundColor = "white"
}
/* Give the element with id 'special' a 2px solid blue border(pick your own rgb blue)*/
var getSpecial = document.getElementsByTagName("special");
for (var i=o; i<getSpecial.length; i++)
{
    getSpecial[i].style.border = "2px solid blue"
}



/*Make all the <p>'s that are nested inside of divs 25px font(font-size: 25px)*/
