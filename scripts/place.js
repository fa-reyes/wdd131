const year = new Date().getFullYear();
document.getElementById("currentYear").textContent = year;
document.getElementById("lastModified").textContent = document.lastModified;

const tempElement = document.getElementById("temperature");
const windElement = document.getElementById("wind-speed");
const windChillElement = document.getElementById("wind-chill");

const temp = parseFloat(tempElement.textContent);
const windSpeed = parseFloat(windElement.textContent);

const calculateWindChill = (t, v) => (13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16))).toFixed(1);

if (temp <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temp, windSpeed)} °C`;
} else {
    windChillElement.textContent = "N/A";
}