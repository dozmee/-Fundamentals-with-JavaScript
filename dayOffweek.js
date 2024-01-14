function demo(day) {
    
    let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    if (day >= 1 && day <= 7){
       console.log(days[day - 1]);
    }else{
        console.log("Invalid day!");
    }
}
demo(3)
demo(5)
demo(15)
