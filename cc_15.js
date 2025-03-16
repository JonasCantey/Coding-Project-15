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
       <p>Risk: <span class="risk-level">${riskLevel}</span></p>`;  //this is saying what content goes in the ticket card
     dashboard.appendChild(riskCard);    //this appends the metric card to the 

     //Task 3
     const resolveButton = document.createElement('Button'); //creating a remove button
             resolveButton.innerHTML = 'Resolve'; //inside the remove button is the word remove
             riskCard.appendChild(resolveButton); //this appends the remove button to the risk card
             //Task 4
             resolveButton.addEventListener('click', () => { //basically says that on click we will remove the 
                dashboard.removeChild(riskCard);        //riskCard from the dashboard
                //Task 6, added stopProp
                event.stopPropagation();    //stopProp makes it so that if you press the remove button 
            });                             //then risk Card clicked wont be logged
            //Task 4
            if (riskLevel === "Low") {
                riskCard.style.backgroundColor = "lightgreen"; // Green for Low risk
            } else if (riskLevel === "Medium") {
                riskCard.style.backgroundColor = "yellow"; // Yellow for Medium risk
            } else if (riskLevel === "High") {
                riskCard.style.backgroundColor = "lightcoral"; // Red for High risk
            }
};
    //Task 5 - Bulk Risk Updates
function increaseRiskLevels() {
    const riskCards = document.querySelectorAll(".metric-card"); // Get all risk cards

    riskCards.forEach((card) => {
        const riskLevelElement = card.querySelector(".risk-level"); // Get the risk level element
        let currentRiskLevel = riskLevelElement.textContent; // Get the current risk level

        // Update the risk level
        if (currentRiskLevel === "Low") {
            riskLevelElement.textContent = "Medium"; // Low → Medium
            card.style.backgroundColor = "lightyellow"; // Update background color
        } else if (currentRiskLevel === "Medium") {
            riskLevelElement.textContent = "High"; // Medium → High
            card.style.backgroundColor = "lightcoral"; // Update background color
        }
        // High remains unchanged
    });
}

// Add "Increase Risk Levels" button
const increaseRiskButton = document.createElement("button");
increaseRiskButton.textContent = "Increase Risk Levels";
increaseRiskButton.style.padding = "10px";
increaseRiskButton.style.margin = "10px";
increaseRiskButton.style.fontSize = "16px";
increaseRiskButton.style.cursor = "pointer";
increaseRiskButton.addEventListener("click", increaseRiskLevels); // Add event listener

dashboard.before(increaseRiskButton); // Add the button above the dashboard
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