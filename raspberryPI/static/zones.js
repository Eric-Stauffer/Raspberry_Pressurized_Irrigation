  $(function () {
    $('a#zone-1-toggle').bind("click",function () {
      $.getJSON("/toggle/1")
      return false

    })
        $('a#zone-2-toggle').bind("click",function () {
      $.getJSON("/toggle/2")
          return false

    })
            $('a#zone-3-toggle').bind("click",function () {
      $.getJSON("/toggle/3")
              return false;
    })
            $('a#zone-4-toggle').bind("click",function () {
      $.getJSON("/toggle/4")
              return false

    })
            $('a#zone-5-toggle').bind("click",function () {
      $.getJSON("/toggle/5")
              return false

    })
            $('a#zone-6-toggle').bind("click",function () {
      $.getJSON("/toggle/6")
              return false

    })
            $('a#zone-7-toggle').bind("click",function () {
      $.getJSON("/toggle/7")
              return false

    })
            $('a#zone-8-toggle').bind("click",function () {
      $.getJSON("/toggle/8")
              return false

    })
  })
function whichZoneIsOn(data){
            if(data.valve1 === true){
          document.getElementById("card-1-body").style.border = "5px solid #387FCD";
        }
        else {document.getElementById("card-1-body").style.border = "1px solid black"}

            if(data.valve2 === true){
          document.getElementById("card-2-body").style.border = "5px solid #387FCD";
        }
        else {document.getElementById("card-2-body").style.border = "1px solid black"}

            if(data.valve3 === true){
          document.getElementById("card-3-body").style.border = "5px solid #387FCD";
        }
        else {document.getElementById("card-3-body").style.border = "1px solid black"}

            if(data.valve4 === true){
          document.getElementById("card-4-body").style.border = "5px solid #387FCD";
        }
        else {document.getElementById("card-4-body").style.border = "1px solid black"}

            if(data.valve5 === true){
          document.getElementById("card-5-body").style.border = "5px solid #387FCD";
        }
        else {document.getElementById("card-5-body").style.border = "1px solid black"}

            if(data.valve6 === true){
          document.getElementById("card-6-body").style.border = "5px solid #387FCD";
        }
        else {document.getElementById("card-6-body").style.border = "1px solid black"}

            if(data.valve7 === true){
          document.getElementById("card-7-body").style.border = "5px solid #387FCD";
        }
        else {document.getElementById("card-7-body").style.border = "1px solid black"}

            if(data.valve8 === true){
          document.getElementById("card-8-body").style.border = "5px solid #387FCD";
        }
        else {document.getElementById("card-8-body").style.border = "1px solid black"}

}
    $(function () {
    $("a.zone-button").bind("click",function () {
      $.getJSON('/isValveOn/',function (data) {
              whichZoneIsOn(data)
      })

    })})
  $.getJSON('/isValveOn/',function (data) {
        whichZoneIsOn(data)
  })

itterateplaceholderDuration()
function itterateplaceholderDuration() {
    for (i = 1; i < 9; i++){placeholderDuration(i)}
}
function placeholderDuration(zone) {
      $.getJSON("/get_duration/".concat(zone),function (data) {
        let zoneId= ("valve-".concat(zone).concat("-duration"))
        document.getElementById(zoneId).placeholder = data

      })
}
function submitChange(zone) {
  var duration = document.getElementById("valve-".concat(zone).concat("-duration")).value;
  $.getJSON("/set_duration/".concat(zone).concat("/").concat(duration))
}
