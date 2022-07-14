function maxNumberOf(number1 = 0, number2 = 0) {
    console.log("the max of two numbers " + Math.max(number1, number2))
}
let number1 = 5;
let number2 = 6;
maxNumberOf(number1, number2);
function evenOrOdd(number) {

    if (number % 2 == 0) {
        console.log(number + " is even")
    }
    else {
        console.log(number + " is odd")
    }
}
let number = 10;
evenOrOdd(number);