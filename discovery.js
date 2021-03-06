var currentVersion = 0.2;
var nextVersion = 1.0;
//COUNTDOWN NEXT VERSION -- UPDATE EVERY CHANGE
// Set the date we're counting down to
var countDownDate = new Date("Nov 15, 2021 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  // Display the result in the element with id="demo"
  document.getElementById("counterActive").innerHTML = "La prossima versione sarà disponibile tra " + days + " giorni.";
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counterActive").innerHTML = "";
    document.getElementById("counterExpired").innerHTML = "La versione " + nextVersion + " è già stata pubblicata.";
  }
}, 1000);

//PAGE CREATION SYSTEM AND FORM VALIDATION