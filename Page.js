/* If you want to know how secure this password is, please go to "Password.js" file and read the commented part */

class Page{
    constructor(){
        this.welcome = createElement("h1")
        this.warning = createElement("h3")
        this.type = createInput("strong or regular password?")
        this.button = createButton("Generate password");

        this.password = createElement("h2");

        this.pass;
        this.check = false;
    }

    display(){
        this.welcome.html("Welcome to the Password Generator!")
        this.welcome.position(250,15)

        this.warning.html("Warning: Please write the password down if you plan on using it.")
        this.warning.position(32,75)

        this.type.position(32,148)
        this.button.position(232,148)

        this.button.mousePressed(() => {
            this.pass = Password.generatePass( this.type.value() );
            this.check = true;
        })

        if(this.check == true){
            this.password.html("Your password is: "+this.pass);
            this.password.position(32,198)
        }
    }
}