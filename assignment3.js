console.log("Assignment #3");

        function convertTemperature() {
            let scale = prompt("Enter 'C' to convert from Celsius to Fahrenheit, or 'F' to convert from Fahrenheit to Celsius:");
            let resultElement = document.getElementById("result");
            if (scale === "C") {
                let Celsius = parseFloat(prompt("Enter temperature in Celsius:"));
                let Fahrenheit = (Celsius * 9/5) + 32;
                resultElement.innerHTML = Celsius + "°C is " + Fahrenheit + "°F";
            }
            else if (scale === "F") {
                let Fahrenheit = parseFloat(prompt("Enter temperature in Fahrenheit:"));
                let Celsius = (Fahrenheit - 32) * 5/9;
                resultElement.innerHTML = Fahrenheit + "°F is " + Celsius.toFixed(2) + "°C";
            }
            else {
                resultElement.innerHTML = "Invalid input. Please enter either 'C' or 'F'.";
            }
        }