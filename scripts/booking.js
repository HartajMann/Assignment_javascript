/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let count=0;
var monday=document.getElementById("monday");
var tuesday=document.getElementById("tuesday");
var wednesday=document.getElementById("wednesday");
var thursday=document.getElementById("thursday");
var friday=document.getElementById("friday");
var full=document.getElementById("full");
var half=document.getElementById("half");
var daily_rate=35;
var calculated_cost=document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
monday.addEventListener("click",function(){btn_clicked(monday);});
tuesday.addEventListener("click",function(){btn_clicked(tuesday);});
wednesday.addEventListener("click",function(){btn_clicked(wednesday);});
thursday.addEventListener("click",function(){btn_clicked(thursday);});
friday.addEventListener("click",function(){btn_clicked(friday);});
function btn_clicked(event)
{   
    if(event.classList.contains("blue-hover"))
    {
        event.classList.remove("blue-hover");
        event.classList.add("clicked");
        count++;
    }
    calculate();
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
var clearBtn=document.getElementById("clear-button");
clearBtn.addEventListener("click",clearAll);
function clearAll()
{
    monday.classList.remove("clicked");
    monday.classList.add("blue-hover");
    tuesday.classList.remove("clicked");
    tuesday.classList.add("blue-hover");
    wednesday.classList.remove("clicked");
    wednesday.classList.add("blue-hover");
    thursday.classList.remove("clicked");
    thursday.classList.add("blue-hover");
    friday.classList.remove("clicked");
    friday.classList.add("blue-hover");
    half.classList.remove("clicked");
    half.classList.add("blue-hover");
    full.classList.remove("blue-hover");
    full.classList.add("clicked");
    count=0;
    calculate();
}


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
half.addEventListener("click",half_btn_clicked);
function half_btn_clicked()
{
    daily_rate=20;
    full.classList.remove("clicked");
    full.classList.add("blue-hover");
    half.classList.remove("blue-hover");
    half.classList.add("clicked");
    calculate();
}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
full.addEventListener("click",full_btn_clicked);
function full_btn_clicked()
{
    daily_rate=35;
    half.classList.remove("clicked");
    half.classList.add("blue-hover");
    full.classList.remove("blue-hover");
    full.classList.add("clicked");
    calculate();
}



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate()
{
    calculated_cost.innerHTML=count*daily_rate;
}