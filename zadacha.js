function swapElements(array, index1, index2) {
    if (index1 < 0 || index1 >= array.length || index2 < 0 || index2 >= array.length) {
        console.error("Invalid indices");
        return;
    }

    // Размяна на елементите
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

// Пример:
let myArray = [1, 2, 3, 4, 5];
console.log("Before swap:", myArray);

swapElements(myArray, 1, 3); // Размяна на елементите на позиции 1 и 3
console.log("After swap:", myArray);
