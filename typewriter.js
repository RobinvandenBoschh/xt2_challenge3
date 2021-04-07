
//Main title typewriter function
var i = 0;
var titleTxt = 'Welcome back to planet Earth, traveller!';
var speedTitle = 40;

function typeWriterTitle() {
    if(i < titleTxt.length) {
        document.getElementById('mainTitle').innerHTML += titleTxt.charAt(i);
        i++;
        setTimeout(typeWriterTitle, speedTitle);
    } else {typeWriterIntro();}
}

var j = 0;
var introTxt = 'Don\'t you worry about anything. You can focus on the landing and we\'ll take care of the rest. We give you a heads up about everything on Earth with a map of the landing zones, the latest news about spaceflight, a preview of Earth by showing random pictures, and last but not least some music made by people living on Earth!';
var speedIntro = 20;

function typeWriterIntro() {
    if(j < introTxt.length) {
        document.getElementById('introText').innerHTML += introTxt.charAt(j);
        j++;
        setTimeout(typeWriterIntro, speedIntro);
    } else {document.getElementById('arrowDown').style.display = 'block';}
}

window.onload = function() {typeWriterTitle()};