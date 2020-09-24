const zones = document.getElementById("zones-cards")
createZones()
addButton()
async function createZones() {
    for(i = 1; i <= 8; i++) {
        zone = document.createElement("div")
        zone.classList.add("card")
        zone.id = "card-".concat(i).concat("-body")
        zoneImg = document.createElement('img')
        zoneImg.classList.add("card-img-top")
        zoneImg.src = "/static/images/zone".concat(i).concat(".jpeg")
        zone.appendChild(zoneImg)

        let cardBody = document.createElement('div')
        cardBody.classList.add("card-body")

        let cardTitle = document.createElement('h2')
        cardTitle.classList.add('card-title')
        cardTitle.innerHTML = "Zone ".concat(i)
        cardBody.appendChild(cardTitle)

        let form = document.createElement('form')
        form.classList.add("form-inline")
        cardBody.appendChild(form)

        let firstForm = document.createElement('div')
        firstForm.classList.add("form-group")
        firstForm.classList.add("mb-2")
        let input = document.createElement('input')
        input.classList.add('form-control-plaintext')
        input.type = "text"
        input.value = "Change Duration:"
        firstForm.appendChild(input)
        form.appendChild(firstForm)

        let secondForm = document.createElement('div')
        secondForm.classList.add("form-group","mx-sm-3","mb-2")
        let label = document.createElement("label")
        label.for = "valve-".concat(i).concat("-duration")
        label.classList.add("sr-only")
        let duration = document.createElement('input')
        duration.type = "number"
        duration.classList.add("form-control")
        duration.id = "valve-".concat(i).concat('-duration')
        duration.min = 0
        duration.max = 60
        secondForm.appendChild(label)
        secondForm.appendChild(duration)
        form.appendChild(secondForm)

        let button = document.createElement('button')
        button.type = "button"
        button.id = ("valve-".concat(i).concat("-btn"))
        button.classList.add("btn","btn-primary","mb-2")
        button.innerHTML = "Submit Change"
        form.appendChild(button)

        
        


        zone.appendChild(cardBody)
        zones.appendChild(zone)
    }
    updateDurations()
    isZoneOn()
}
function submitChange(zone){
    let duration = document.getElementById("valve-".concat(zone).concat("-duration")).value;
    fetch("/set_duration/".concat(zone).concat("/".concat(duration)))
}

function addButton(){
    for(let i = 1; i <= 8 ; i++){
        let button = document.getElementById("valve-".concat(i).concat("-btn"))
        button.addEventListener('click',function () {
            submitChange(i)

        })
    }
}

async function updateDurations() {
    for (let i = 1; i <= 8; i++){
        let response = await fetch('/get_duration/'.concat(i))
        let result = await response.json()
        let duration = document.getElementById("valve-".concat(i).concat("-duration"))
        duration.placeholder = result
    }
}
turnOn()
function turnOn() {
    let zones = document.getElementsByClassName("card-img-top")
    for (let i = 0; i < 8; i++){
        let zone = zones[i]
        zone.addEventListener('click', async function() {
            let response = await fetch("/toggle/".concat(i+1))
            isZoneOn()

        })
    }
}
async function isZoneOn() {
    let response = await fetch("/isValveOn/");
    let result = await response.json()


if(await result.valve1 === true){
document.getElementById("card-1-body").style.border = "5px solid #387FCD";
}
else {document.getElementById("card-1-body").style.border = "1px solid black"}

if(await result.valve2 === true){
document.getElementById("card-2-body").style.border = "5px solid #387FCD";
}
else {document.getElementById("card-2-body").style.border = "1px solid black"}

if(await result.valve3 === true){
document.getElementById("card-3-body").style.border = "5px solid #387FCD";
}
else {document.getElementById("card-3-body").style.border = "1px solid black"}

if(await result.valve4 === true){
document.getElementById("card-4-body").style.border = "5px solid #387FCD";
}
else {document.getElementById("card-4-body").style.border = "1px solid black"}

if(await result.valve5 === true){
document.getElementById("card-5-body").style.border = "5px solid #387FCD";
}
else {document.getElementById("card-5-body").style.border = "1px solid black"}

if(await result.valve6 === true){
document.getElementById("card-6-body").style.border = "5px solid #387FCD";
}
else {document.getElementById("card-6-body").style.border = "1px solid black"}

if(await result.valve7 === true){
document.getElementById("card-7-body").style.border = "5px solid #387FCD";
}
else {document.getElementById("card-7-body").style.border = "1px solid black"}

if(await result.valve8 === true){
document.getElementById("card-8-body").style.border = "5px solid #387FCD";
}
else {document.getElementById("card-8-body").style.border = "1px solid black"}
}
