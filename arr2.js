function sumOfTwoNumbers(num1, num2, num3) {

    let tempResult = sum(num1, num2)
    let rezult = substract(tempResult, num3)
    console.log(rezult);


    function sum(x, y) {
        return x + y;
    }
    function substract(a, b) {
        return a - b;
    }

}
//sumOfTwoNumbers(23, 6, 10)
sumOfTwoNumbers(1,17,30)
//sumOfTwoNumbers(23,6,10)