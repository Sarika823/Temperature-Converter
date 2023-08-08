function convertTemperature() {
  const inputTemp = parseFloat(document.getElementById('inputTemp').value);
  const unit = document.getElementById('unitSelect').value;
  let result;

  if (unit === 'celsius') {
    // Convert Celsius to Fahrenheit
    result = (inputTemp * 9/5) + 32;
  } else {
    // Convert Fahrenheit to Celsius
    result = (inputTemp - 32) * 5/9;
  }

  // Show the result with black background and white text
  const resultElement = document.getElementById('result');
  resultElement.textContent = `Converted temperature: ${result.toFixed(2)} °${unit.toUpperCase()}`;
  resultElement.style.display = 'block';

  updateBackground(result);
  updateIcon(result);
}

function updateBackground(temperature) {
  const intensity = Math.min(Math.abs(temperature) / 100, 1);
  const red = Math.round(255 - 255 * intensity);
  const blue = Math.round(255 - 255 * intensity);

  const background = `linear-gradient(135deg, rgba(${red}, 194, ${blue}, 0.8), rgba(166, ${blue}, 238, 0.8))`;
  document.querySelector('.background').style.background = background;
}

function updateIcon(temperature) {
  const sunMoonElement = document.querySelector('.sun-moon');
  const sunIcon = '<i class="bx bxs-sun"></i>';
  const moonIcon = '<i class="bx bxs-moon"></i>';

  if (temperature >= 20) {
    sunMoonElement.innerHTML = sunIcon;
  } else {
    sunMoonElement.innerHTML = moonIcon;
  }

  sunMoonElement.style.opacity = Math.min(Math.abs(temperature) / 100, 1);
}
