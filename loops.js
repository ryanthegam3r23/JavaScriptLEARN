// for
for(let i=0;i<4;i++){
    document.write("My for is working?");
}

const num = 2;
let result = 0;

for(let i=1;i<=10;i++){
    result = num * i;
    document.write(`<p> ${num} x ${i} = ${result} <p>`);
}

//while loop

console.log("---- While Loop ----")
let i=0; // start point

while(i<=10){ // stop condition
    console.log(i);
    i++; // interval
}

// do-while loop
let j=0;//start point
do{
    console.log(j);
    j++;//interval
}while(j<=10);//stop condition


//while

function countDown(){
    let seconds =10;
    let results = "";

    while(seconds>0){
        results+=`<p> Launcing in ${seconds} </p>`;
        seconds--;
    }
    results += "Liftoff!!!"
    document.write(results);
}

countDown();

//do-while
function passwordPrompt(){
    let correctPassword = "1234";
    let userInput;
    let notification = "Simulating password input";

    do{
        userInput = prompt("Enter your password: ")
        notification+="User entered: " + userInput;

    }while(userInput !== correctPassword);
    
    document.write(notification);
}