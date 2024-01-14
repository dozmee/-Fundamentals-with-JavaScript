function demo(n, Arr) {

    let res = [];
    for (let i = n - 1; i >= 0; i--) {

        res.push(Arr[i]);
    }
console.log(res.join("- "));

}
demo([3, [10, 20, 30, 40, 50]]);
demo([4, [-1, 20, 99, 5]]);
demo([2, [66, 43, 75, 89, 47]])