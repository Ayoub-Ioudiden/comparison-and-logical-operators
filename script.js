const myAge = 24;

if (myAge >= 18 && myAge <= 25) {
    console.log("you get 50% off!");

} else {
    console.log("sorry, you are not allowed in");

}

const firstName = "Bram";

if (firstName == "Sarah" || firstName == "Bram") {
    console.log("You get a free beer!");

} else {
    console.log("Sorry your name is incorrect");
}

const totalAmount = 25;

if (totalAmount > 25 && totalAmount < 51) {
    console.log("You get free veggie bitterballen!");

} else if (totalAmount > 50 && totalAmount < 100) {
    console.log("You get a free portion of nachos!");

} else if (totalAmount >= 100) {
    console.log("you get free champagne!");
}
else {
    console.log("sorry no promotion")
}