let input = document.getElementById("input-el")
const btn = document.getElementById("btn-el")
let mf = document.getElementById("mf-el")
let lg = document.getElementById("lg-el")
let kp = document.getElementById("kp-el")

let meter = 0
let feet = 0
let liter = 0
let gallon = 0
let kilo = 0
let pound = 0

btn.addEventListener("click", function() {
    console.log(input.value)
    convert(input.value)
    mf.innerHTML = `${input.value} Meters = ${feet} feet | ${input.value} feet = ${meter} meters`
    lg.innerHTML = `${input.value} Litres = ${gallon} gallons | ${input.value} gallons = ${liter} litres`
    kp.innerHTML = `${input.value} kilos = ${pound} pounds | ${input.value} pounds = ${kilo} kilos`
})

function convert(val) {
    meter = (val/3.281).toFixed(3)
    feet = (val*3.281).toFixed(3)
    liter = (val/0.264).toFixed(3)
    gallon = (val*0.264).toFixed(3)
    kilo = (val/2.204).toFixed(3)
    pound = (val*2.204).toFixed(3)
}