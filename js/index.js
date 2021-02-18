let ideation = document.getElementsByClassName("ideationcreation");
let elevator = document.getElementsByClassName("elevatorpitch");
let interview = document.getElementsByClassName("interviewdata");
let persona = document.getElementsByClassName("personas");

function ideationClick() {
    if (ideation.style.display === "none") {
        ideation.style.display = "block";
        elevator.style.display = "none";
        interview.style.display = "none";
        persona.style.display = "none";
    } else {
        ideation.style.display = "none";
    }
  }

function elevatorClick() {
    if (elevator.style.display === "none") {
        ideation.style.display = "none";
        elevator.style.display = "block";
        interview.style.display = "none";
        persona.style.display = "none";
    } else {
        elevator.style.display = "none";
    }
}

function interviewClick() {
    if (interview.style.display === "none") {
        ideation.style.display = "block";
        elevator.style.display = "none";
        interview.style.display = "block";
        persona.style.display = "none";
    } else {
        interview.style.display = "none";
    }
}

function personaClick() {
    if (persona.style.display === "none") {
        ideation.style.display = "block";
        elevator.style.display = "none";
        interview.style.display = "none";
        persona.style.display = "block";
    } else {
        persona.style.display = "none";
    }
}


