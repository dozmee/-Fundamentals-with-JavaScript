function solve(input) {
   
   let mnojitel = Number(input[0])
   
    for (let factor = 1; factor <= 10; factor++) {
        let rezult = factor * mnojitel;

        console.log(`${factor} * ${mnojitel} = ${rezult}`);
    }
    
}

solve(["5"])