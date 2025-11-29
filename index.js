const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");


let homeCount =0;
function addOneHomeBtn(){
    homeCount = homeCount+1;
    homeScore.textContent = homeCount;
}
function addTwoHomeBtn(){
    homeCount = homeCount+2;
    homeScore.textContent = homeCount;
}
function addThreeHomeBtn(){
    homeCount = homeCount+3;
    homeScore.textContent = homeCount;
}

let guestCount = 0;
function addOneGuestBtn(){
    guestCount = guestCount+1;
    guestScore.textContent = guestCount;
}
function addTwoGuestBtn(){
    guestCount = guestCount+2;
    guestScore.textContent = guestCount;
}
function addThreeGuestBtn(){
    guestCount = guestCount+3;
    guestScore.textContent = guestCount;
}
