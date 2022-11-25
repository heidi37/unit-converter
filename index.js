/*
1 meter = 3.281 feet
20 meters = 65.616 feet | 20 feet = 6.096 meters

1 liter = 0.264 gallon
20 liters = 5.284 gallons | 20 gallons = 75.708 liters

1 kilogram = 2.204 pound
20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
*/

const lengthId = document.getElementById("length")
const volumeId = document.getElementById("volume")
const massId = document.getElementById("mass")
const inputField = document.getElementById("units")
const convertButton = document.getElementById("convert-btn")
const clearButton = document.getElementById("clear-btn")

convertButton.addEventListener("click", function(){
    lengthId.innerHTML =
    `${inputField.value} meters = ${(inputField.value * 3.281).toFixed(3)} feet |
     ${inputField.value} feet = ${(inputField.value / 3.281).toFixed(3)} meters`
     
     volumeId.innerHTML =
    `${inputField.value} liters = ${(inputField.value * 0.264).toFixed(3)} gallons |
     ${inputField.value} feet = ${(inputField.value / 0.264).toFixed(3)} liters`
     
     massId.innerHTML =
    `${inputField.value} meters = ${(inputField.value * 2.204).toFixed(3)} pounds |
     ${inputField.value} feet = ${(inputField.value / 2.204).toFixed(3)} kilos`
})

clearButton.addEventListener("click", function() {
    inputField.value = ``
    lengthId.innerHTML = ``
    volumeId.innerHTML = ``
    massId.innerHTML = ``
}) 



