
function greaterNumber(numberOne , numberTwo) {
    if(numberOne > numberTwo){
        console.log("The greater number is: " + numberOne);
    } else if (numberOne < numberTwo){
        console.log("The greater number is: " + numberTwo);
    } else {
        console.log("Both numbers are equal: " + numberOne + " = " + numberTwo);
    }
}
greaterNumber(5, 10);
greaterNumber(20, 15);
greaterNumber(7, 7);