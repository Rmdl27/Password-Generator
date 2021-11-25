/* 
    Made by Rmdl27 (in 25th November, 2021)

 Each character has 8 possibilities, therefore each set has 8x8x8x8 = 4096 possible combinations.

 Since a regular password has 2 sets, a regular password has 4096x4096 = 16,777,216 possible combinations.

 And since a strong password has 3 sets, a strong password has 4096x4096x4096 = 68,719,476,736 possible combinations.

 I dunno about you, but that seems pretty strong and secure to me.


 PS: 
 Please write the password down if you plan on using it, 
 because if you forget the password, you probably won't be able to guess it.

*/

class Password{
    constructor(){
        this.password;
    }

    //Creates a set
    static createSet(){
        var a,b,c,d;

        var rand1 = round(random(1,8));
        var rand2 = round(random(1,8));
        var rand3 = round(random(1,8));
        var rand4 = round(random(1,8));

        // creates first character
        if(rand1 == 1){
            a = "a"
        } else if(rand1 == 2) {
            a = "b"
        } else if(rand1 == 3) {
            a = "c"
        } else if(rand1 == 4) {
            a = "d"
        } else if(rand1 == 5) {
            a = "e"
        } else if(rand1 == 6) {
            a = "f"
        } else if(rand1 == 7) {
            a = "g"
        } else if(rand1 == 8) {
            a = "h"
        }

        // creates second character
        if(rand2 == 1){
            b = "A"
        } else if(rand2 == 2) {
            b = "B"
        } else if(rand2 == 3) {
            b = "C"
        } else if(rand2 == 4) {
            b = "D"
        } else if(rand2 == 5) {
            b = "E"
        } else if(rand2 == 6) {
            b = "F"
        } else if(rand2 == 7) {
            b = "G"
        } else if(rand2 == 8) {
            b = "H"
        }

        // creates third character
        if(rand3 == 1){
            c = "("
        } else if(rand3 == 2) {
            c = ")"
        } else if(rand3 == 3) {
            c = "{"
        } else if(rand3 == 4) {
            c = "}"
        } else if(rand3 == 5) {
            c = "["
        } else if(rand3 == 6) {
            c = "]"
        } else if(rand3 == 7) {
            c = "|"
        } else if(rand3 == 8) {
            c = "/"
        }

        // creates fourth character
        if(rand4 == 1){
            d = "!"
        } else if(rand4 == 2) {
            d = "?"
        } else if(rand4 == 3) {
            d = "#"
        } else if(rand4 == 4) {
            d = "@"
        } else if(rand4 == 5) {
            d = "*"
        } else if(rand4 == 6) {
            d = "&"
        } else if(rand4 == 7) {
            d = "$"
        } else if(rand4 == 8) {
            d = "~"
        }

        return a+b+c+d;
    }

    //Creates the password
    static generatePass(type){
        var set1 = Password.createSet();
        var set2 = Password.createSet();
        var set3 = Password.createSet();

        if(type == "regular"){
            return set1+set2;
        } else if(type == "strong"){
            return set1+set2+set3;
        } else {
            return "Please enter 'strong' or 'regular' as a password type";
        }
    }
}