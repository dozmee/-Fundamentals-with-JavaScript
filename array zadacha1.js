function dayOfWeek(input) {

    let dayOfWeekAsStrin = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",

    ]
    let rezult = dayOfWeekAsStrin[input-1];
    if(rezult){
        console.log(rezult);
    }else{
        console.log("Invalid day!");
    }
    
    

}
dayOfWeek(55)