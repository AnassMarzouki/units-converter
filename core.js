const inputvalue = document.getElementById("input-field")
const ConvertBtn = document.getElementById("convert-btn")

//fields
const lengthField = document.getElementById("length-str")
const volumeField = document.getElementById("volume-str")
const massField = document.getElementById("mass-str")

//add a listener
ConvertBtn.addEventListener("click", function (){
    inputNumber = Number(inputvalue.value)

    convertLength()

    convertVolume()

    convertMass()

})

function convertLength(){
    metersToFeet = inputNumber * 3.281
    feetsToMeter = inputNumber / 3.281
    lengthField.textContent = `${inputNumber} meters = ${metersToFeet.toFixed(3)} feet | ${inputNumber} feet = ${feetsToMeter.toFixed(3)} meters`
    
}

function convertVolume(){
    litersToGallons = inputNumber * 0.264
    gallonsToLiters = inputNumber / 0.264
    volumeField.textContent = `${inputNumber} liters = ${litersToGallons.toFixed(3)} gallons | ${inputNumber} gallons = ${gallonsToLiters.toFixed(3)} liters`
}

function convertMass(){
    kilosToPounds = inputNumber * 2.204
    poundsTokilos = inputNumber / 2.204
    massField.textContent = `${inputNumber} Kilos = ${kilosToPounds.toFixed(3)} pounds | ${inputNumber} pounds = ${poundsTokilos.toFixed(3)} kilos` 
}


/*
1 meter = 3.281 feet
1 liter = 0.264 gallon 
1 kilogram = 2.204 pound
*/