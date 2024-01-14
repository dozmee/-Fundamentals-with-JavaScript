function sumEvenNumer(arr) {


    let sum =0;
    for (let text of arr) {
        let num =Number(text);
        sum +=num % 2===0 ? num   : 0;
    }console.log(sum);



} sumEvenNumer(['1', '2', '3', '4', '5', '6'])