
    function convertTemperatureRange(startValue, endValue, scale) {
      let output = "<h2>Converted Temperatures:</h2><ul>";

      for (let temp = startValue; temp <= endValue; temp++) {
        if (scale === "C") {
          let fahrenheit = (temp * 9/5) + 32;
          output += `<li>${temp}°C = ${fahrenheit.toFixed(2)}°F</li>`;
        } else if (scale === "F") {
          let celsius = (temp - 32) * 5/9;
          output += `<li>${temp}°F = ${celsius.toFixed(2)}°C</li>`;
        } else {
          output += "<li>Invalid scale. Please use 'C' for Celsius or 'F' for Fahrenheit.</li>";
          break;
        }
      }

      output += "</ul>";
      document.getElementById("output").innerHTML = output;
    }

    function startConversion() {
      let startValue = prompt("Enter the starting temperature:");
      let endValue = prompt("Enter the ending temperature:");
      let scale = prompt("Enter the scale (C for Celsius or F for Fahrenheit):");

      convertTemperatureRange(startValue, endValue, scale);
    }

