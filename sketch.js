/* If you want to know how secure this password is, please go to "Password.js" file and read the commented part */

var page;

function setup(){
    createCanvas(1020,480);
    
    page = new Page();
}

function draw(){
    background("pink")

    page.display();
}