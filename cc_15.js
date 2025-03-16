const dashboard = document.querySelector("#riskDashboard"); //selecting the riskDashboard container to work in

console.log("Risk Dashboard Loaded") //logging risk dash loaded

//Task 2 - Adding Risk Items
function addRiskItem (riskName, riskLevel, department) {
    const riskCard = document.createElement("div");  //creates the metric  card
 
     riskCard.setAttribute("id","ticketCard"); //setting attributes:
     riskCard.setAttribute("class", "metric-card"); //setting attributes:
     
     //Populate card with title and placeholder value
     riskCard.innerHTML =    //defining what html was in the ticket cards
     `<h2>${riskName}</h2>
     <p>${department}</p>
     <p>Risk: ${riskLevel}</p>`    //this is saying what content goes in the ticket card
     dashboard.appendChild(riskCard);    //this appends the metric card to the dashboard
};
const riskForm = document.querySelector("#riskForm"); // Added this line
const riskInput = document.querySelector("#riskInput"); // Added this line
const departmentInput = document.querySelector("#departmentInput"); // Selecting the department input field
const riskLevelInput = document.querySelector("#riskLevelInput"); // Selecting the risk level dropdown

// 2. Event listener for form submission
riskForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    const riskName = riskInput.value.trim(); // Get the value from the input field and trim whitespace
    const department = departmentInput.value.trim(); // Get the value from the department input field
    const riskLevel = riskLevelInput.value; // Get the value from the risk level dropdown
    if (riskName && department && riskLevel) {
        addRiskItem(riskName, riskLevel, department);
        riskInput.value = ""; // Clear the risk input field
departmentInput.value = ""; // Clear the department input field
riskLevelInput.value = "Low"; // Reset the risk level dropdown to "Low"
    }});

addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");