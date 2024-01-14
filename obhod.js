function obekt(n, arr) {

    let prazen = [];

    for (let index = n - 1; index >= 0; index--)

        prazen.push(arr[index])
        console.log(prazen.join(' ') );

}


obekt(3, [10, 20, 30, 40, 50])