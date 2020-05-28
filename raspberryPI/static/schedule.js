itterateZoneChecked()
function itterateZoneChecked() {
    for (i = 1; i < 9; i++){zoneChecked(i)}
}
function zoneChecked(zone) {
      $.getJSON("/get_zone_bool/".concat(zone),function (data) {
        let zoneId = ("zoneCheckbox".concat(zone))
        document.getElementById(zoneId).checked = data.zoneBool

      })
}
itterateDayChecked()
function itterateDayChecked() {
    for (i = 0; i < 7; i++){dayChecked(i)}
}
function dayChecked(zone) {
      $.getJSON("/is_day_on/".concat(zone),function (data) {
        let dayId = ("dayCheckbox".concat(zone))
         let checkedBox = ''
         if(data.isDayOn === true){checkedBox = "checked"}
        document.getElementById(dayId).checked = checkedBox

      })
}
getHour()
function getHour() {
   $.getJSON("/get_hour/",function (data) {
      document.getElementById("schedule-hour-setter").placeholder = data.hour
   })

}
getMinute()
function getMinute() {
   $.getJSON("/get_minute/",function (data) {
      document.getElementById("schedule-minute-setter").placeholder = data.minute
   })

}

function itterateSetDays() {
   for(i = 0; i < 7; i++){setDays(i)}

}
function setDays(day) {
   let checked = 0
   if(document.getElementById("dayCheckbox".concat(day)).checked === true){checked = 1}
   $.getJSON("/set_day/".concat(day).concat("/").concat(checked))
}
function itterateSetZones() {
   for (i = 1; i < 9; i++){
      setZones(i)
   }
}
function setZones(zone) {
   let checked = 0
   if(document.getElementById("zoneCheckbox".concat(zone)).checked === true){checked = 1}
   $.getJSON("/set_zone/".concat(zone).concat("/").concat(checked))

}
function setTime() {
   let hour = document.getElementById("schedule-hour-setter").value
   if(hour !== ''){
   $.getJSON("/set_hour/".concat(hour))}

   let minute = document.getElementById("schedule-minute-setter").value
   if (minute !== '') {
   $.getJSON("/set_minute/".concat(minute))}

}
function submitChanges() {
   setTime()
   itterateSetDays()
   itterateSetZones()
   location.reload();
   return false;

}
