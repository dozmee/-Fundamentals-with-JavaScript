function arraysDemo(number, arrOfNumbers) {


    let newArray = arrOfNumbers.slice(0, number)
    let newArrayReverse = newArray.reverse();
    console.log(newArrayReverse.join(' '));


}
arraysDemo(5, [10, 20, 30, 40, 50, 70, 80, 90])