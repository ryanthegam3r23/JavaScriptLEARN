function doubleNumber(num){
    let total = num * 2
    console.log(total);
    return total;
}
doubleNumber(4);
doubleNumber(10);

function combineNames(fname="Unknown",lname="Unknown"){
    return fname + lname
}
combineNames("Allice", "Johnson")
combineNames("Allice");
combineNames();

function convertToSeconds(minutes){
    let total = minutes * 60
    console.log(total)
    return total
}
convertToSeconds(5);
convertToSeconds(10);

function weatherOutfit(){
    let tmp = prompt("Enter the temperature");
    let outfit;
    let p = document.getElementById("weather");
    p.classList.remove("hot","cold","normal");
    
    if(tmp<15){
        p.classList.add("cold");
        outfit="Jacket"; 
    }else if(tmp<25){
        outfit="sweater";
        p.classList.add("normal");
    }else{
        outfit="t-shirt"; 
        p.classList.add("hot");
    }

    p.innerHTML="You should wear : " + outfit;
}