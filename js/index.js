var ideaClick = document.getElementById("ideationcreation");
var elevateClick = document.getElementById("elevatorpitch");
var intClick = document.getElementById("interviewdata");
var persClick = document.getElementById("personas");
var journeymapClick = document.getElementById("userjourneymap");
var competitorSWOTClick = document.getElementById("competitorSWOT");

var int1 = document.getElementById("interview1");
var int2 = document.getElementById("interview2");
var int3 = document.getElementById("interview3");
var int4 = document.getElementById("interview4");


window.onload = function(){ 
    loadFunction();
} /*Loads a default state with ideation article enabled. Otherwise it takes two clicks to change active article */

function loadFunction() {
    ideaClick.style.display = "inherit";
    elevateClick.style.display = "none";
    intClick.style.display = "none";
    persClick.style.display = "none";
    journeymapClick.style.display = "none";
    competitorSWOT.style.display ="none";
}

function ideationClick() {
if (ideaClick.style.display = "none") {
    ideaClick.style.display = "inherit";
    elevateClick.style.display = "none";
    intClick.style.display = "none";
    persClick.style.display = "none";
    journeymapClick.style.display = "none";
    competitorSWOT.style.display ="none";
} else {
    ideaClick.style.display = "none";
}
}

function elevatorClick() {
if (elevateClick.style.display = "none") {
    ideaClick.style.display = "none";
    elevateClick.style.display = "inherit";
    intClick.style.display = "none";
    persClick.style.display = "none";
    journeymapClick.style.display = "none";
    competitorSWOT.style.display ="none";
} else {
    elevateClick.style.display = "none";
}
}

function interviewClick() {
if (intClick.style.display = "none") {
    ideaClick.style.display = "none";
    elevateClick.style.display = "none";
    intClick.style.display = "inherit";
    persClick.style.display = "none";
    journeymapClick.style.display = "none";
    competitorSWOT.style.display ="none";
} else {
    intClick.style.display = "none";
}
}

function personaClick() {
if (persClick.style.display = "none") {
    ideaClick.style.display = "none";
    elevateClick.style.display = "none";
    intClick.style.display = "none";
    persClick.style.display = "inherit";
    journeymapClick.style.display = "none";
    competitorSWOT.style.display ="none";
} else {
    persClick.style.display = "none";
}
}

function mapClick() {
    if (persClick.style.display = "none") {
        ideaClick.style.display = "none";
        elevateClick.style.display = "none";
        intClick.style.display = "none";
        persClick.style.display = "none";
        journeymapClick.style.display = "inherit";
        competitorSWOT.style.display ="none";
    } else {
        persClick.style.display = "none";
    }
    }

    function SWOTClick() {
if (persClick.style.display = "none") {
    ideaClick.style.display = "none";
    elevateClick.style.display = "none";
    intClick.style.display = "none";
    persClick.style.display = "none";
    journeymapClick.style.display = "none";
    competitorSWOT.style.display ="inherit";
} else {
    persClick.style.display = "none";
}
}
