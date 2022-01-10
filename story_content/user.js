function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6JT6ptpkAns":
        Script1();
        break;
      case "6S2zJFCT7QH":
        Script2();
        break;
  }
}

function Script1()
{
  setInterval(function(){
var currentTime = new Date()
var hours = currentTime.getHours()
if (hours < 10)
hours = "0" + hours
var minutes = currentTime.getMinutes()
if (minutes < 10)
minutes = "0" + minutes
var seconds = currentTime.getSeconds()
if (seconds < 10)
seconds = "0" + seconds
var timeString=hours + ":" + minutes + ":" + seconds
var player = GetPlayer();
player.SetVar("SystemTime",timeString);
}, 1)

var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script);
}

function Script2()
{
  var player = GetPlayer();

WEB_APP_URL = "https://script.google.com/macros/s/AKfycbw-mQ8w-BVZ05Dsv7DMOkLqzkWAiYgfb1602-cuwzqc7JuBXkZ3rrkgZ6lhGKRd8xFFbQ/exec";

storyline =
{
"SystemTime" : player.GetVar("SystemTime"),
"name" : player.GetVar("name"),
"grand_total" : player.GetVar("grand_total")
}

$.ajax(
{
url: WEB_APP_URL,
type: "POST",
data: storyline,
success: function(data)
{
console.log(data);
},
error: function(err)
{
console.log('Error:', err);
}
});
return false;
}

