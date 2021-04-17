function calculateAge(){
var dob = document.getElementById("DOB").value;
var ageAtBirth = document.getElementById("AgeBirth").value;
var calculate = document.getElementById("calculate");
var showing =  document.getElementById("calculateAge");




var dob_year = new Date(dob);


var ageAtBirth_year = new Date(ageAtBirth);

let age_diff = Math.abs(dob_year - ageAtBirth_year);
let showIt = age_diff / 3.1536E+10;
let getdateof = document.getElementById("AgeBirth").value
showing.innerText  = "Your Age at the date of " + getdateof + " is "  + Math.floor(showIt) + " years";
console.log(age_diff);
}

let calcAge = document.getElementById("calculate");
calcAge.onclick = function (){
    calculateAge();

}