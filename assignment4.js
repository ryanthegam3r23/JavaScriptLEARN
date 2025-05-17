
function convertTemperatureRange(startValue, endValue, scale) {
    for (let temp = startValue; temp <= endValue; temp++) {
        if (scale === "C") {
            let fahrenheit = (temp * 9/5) + 32;
            console.log(temp + "°C = " + fahrenheit + "°F");
        } else if (scale === "F") {
            let celsius = (temp - 32) * 5/9;
            console.log(temp + "°F = " + celsius.toFixed(2) + "°C");
        } else {
            console.log("Please enter either 'C' for Celsius or 'F' for Fahrenheit.");
            return;
        }
    }
}
let startValue = prompt("Enter the starting temperature:");
let endValue = prompt("Enter the ending temperature:");
let scale = prompt("Enter the scale ('C' for Celsius or 'F' for Fahrenheit):").toUpperCase();


startValue = Number(startValue);
endValue = Number(endValue);


convertTemperatureRange(startValue, endValue, scale);