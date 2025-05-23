const inputTemp = document.getElementById('inputTemp');
const result = document.getElementById('result');
const radios = document.getElementsByName('conversionType');

function convertTemperature() {
  const value = parseFloat(inputTemp.value);
  const conversionType = Array.from(radios).find(r => r.checked).value;

  result.classList.remove("visible"); // Reset transition

  if (isNaN(value)) {
    result.textContent = "Please enter a valid number.";
    result.classList.add("visible");
    return;
  }

  let converted;
  if (conversionType === 'CtoF') {
    converted = (value * 9 / 5) + 32;
    result.textContent = `${value} °C = ${converted.toFixed(2)} °F`;
  } else {
    converted = (value - 32) * 5 / 9;
    result.textContent = `${value} °F = ${converted.toFixed(2)} °C`;
  }

  result.classList.add("visible");
}

inputTemp.addEventListener('input', convertTemperature);
radios.forEach(radio => radio.addEventListener('change', convertTemperature));
