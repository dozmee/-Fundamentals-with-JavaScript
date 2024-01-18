function solve(arr1, arr2) {


    for (let i = 0; i < arr1.length; i++) {
        arr1 = Number(arr1[i])

    }
    for (let i = 0; i < arr2.length; i++) {
        arr2 = Number(arr2[i])


    }
    let rezult = true;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            rezult = false;
            break;

        } else if (rezult === true){
            console.log(`Arrays are identical. Sum: ${sum1}`);
        }

    }

}

// solve(['10', '20', '30'], ['10', '20', '30'])
// solve(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])
// solve(['1'], ['10'])
function solve(arr1, arr2) {
    let sum1 = 0;

    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i]);
        sum1 += arr1[i];
    }

    let rezult = true;

    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = Number(arr2[i]);
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            rezult = false;
            break;
        }
    }

    if (rezult) {
        console.log(`Arrays are identical. Sum: ${sum1}`);
    }
}

// Примери
solve(['10','20','30'], ['10','20','30']); // Arrays are identical. Sum: 60
solve(['1','2','3','4','5'], ['1','2','4','4','5']); // Arrays are not identical. Found difference at 2 index
solve(['1'], ['10']); // Arrays are not identical. Found difference at 0 index
