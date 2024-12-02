function calculateWindChill(temp, windSpeed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * temp * Math.pow(windSpeed, 0.16)
  ).toFixed(2);
}

const temp = 5; // Celsius
const windSpeed = 20; // km/h

let windChill = 'N/A';
if (temp <= 10 && windSpeed > 4.8) {
  windChill = calculateWindChill(temp, windSpeed) + '°C';
}
document.getElementById('temperature').textContent = temp+'°C';
document.getElementById('windSpeed').textContent = windSpeed;
document.getElementById('windChill').textContent = windChill;