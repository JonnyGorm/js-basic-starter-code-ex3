var hoursWorked = prompt("How many hours did you work this week?");
var hourlyRate = prompt("What is your hourly pay?");
var pay = hoursWorked * hourlyRate;

console.log("Your wages this week are " + pay.toFixed(2) + ".");
