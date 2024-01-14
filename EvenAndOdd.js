function evenOdd(arr) {

    let sumOdd = 0;
    let sumEven = 0;

    for (let numbers of arr) {
        if (numbers % 2 === 0) {
            sumOdd += numbers
        } else {
            sumEven += numbers
        }
    }console.log(sumOdd-sumEven);

}
evenOdd([1, 2, 3, 4, 5, 6])
evenOdd([3,5,7,9])
evenOdd([2,4,6,8,10])