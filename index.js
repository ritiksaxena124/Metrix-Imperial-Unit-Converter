const input = document.getElementById("input");
const convertBtn = document.getElementById("btn");
const meterFeet = document.getElementById("meter-feet");
const litreGallon = document.getElementById("litre-gallon");
const kiloPound = document.getElementById("kilo-pound");

convertBtn.addEventListener("click", function () {
  meterFeet.textContent = `${input.value} meters = ${(
    input.value * 3.281
  ).toFixed(3)} feet | ${input.value} feet = ${(input.value / 3.281).toFixed(
    3
  )} meters`;
  litreGallon.textContent = `${input.value} liters = ${(
    input.value * 0.264
  ).toFixed(3)} gallons | ${input.value} gallons = ${(
    input.value / 0.264
  ).toFixed(3)} liters`;
  kiloPound.textContent = `${input.value} kilos = ${(
    input.value * 2.204
  ).toFixed(3)} pounds | ${input.value} pounds = ${(
    input.value / 2.204
  ).toFixed(3)} kilos`;
});
