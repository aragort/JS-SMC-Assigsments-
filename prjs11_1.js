


//I used the prompt window method to get the input of the number.
//Since prompt generate a string I use parserInt to convert into a number.
let mywin_width = parseInt(prompt("Enter width number"));

// Set the value of the window property to the one hold in the variable.
window.innerWidth = mywin_width;


//when is true than the value of the width is greater than 1000 the property window.location redirect the page to a website,
// when the value is less than 1000 the property will open a different one.
if (mywin_width >= 1000) {


    window.location = "http://www.scripttheweb.com/js/";

} else{
    window.location = "http://www.scripttheweb.com/css/";
}

