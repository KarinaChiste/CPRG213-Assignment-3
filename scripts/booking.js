/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dailyRate = 35;
let daysSelected = 0;

const calculatedCost = document.getElementById("calculated-cost");

const monday = document.getElementById("monday");
const tuesday = document.getElementById("tuesday");
const wednesday = document.getElementById("wednesday");
const thursday = document.getElementById("thursday");
const friday = document.getElementById("friday");

const full = document.getElementById("full");
const half = document.getElementById("half");
const clearButton = document.getElementById("clear-button");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function ClickHandler(day){
        if (day.classList.contains("clicked") == false){
            daysSelected ++;
            day.classList.add("clicked");
        }
        CalculateCost();
}




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function ClearDays(){
    daysSelected = 0;
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");
    CalculateCost();
}





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function ChangeRateHalf(){
    half.classList.add("clicked");
    full.classList.remove("clicked");
    dailyRate = 20;
    CalculateCost();
}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function ChangeRateFull(){
    full.classList.add("clicked");
    half.classList.remove("clicked");
    dailyRate = 35;
    CalculateCost();
}




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function CalculateCost(){
    calculatedCost.innerHTML = dailyRate * daysSelected;
}

clearButton.addEventListener("click", ClearDays);

// referenced W3schools for adding event listeners to days of the week with parameters
monday.addEventListener("click", function() {ClickHandler(monday);});
tuesday.addEventListener("click", function(){ClickHandler(tuesday);});
wednesday.addEventListener("click", function(){ClickHandler(wednesday);});
thursday.addEventListener("click", function(){ClickHandler(thursday);});
friday.addEventListener("click", function(){ClickHandler(friday);});


half.addEventListener("click", ChangeRateHalf);
full.addEventListener("click", ChangeRateFull);