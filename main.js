document.addEventListener('DOMContentLoaded', function () {

    let currentStep = 1;

    document.getElementById(`form1`).addEventListener('submit', function(event) {
        event.preventDefault();
    
        // Change the color of the completed step
        document.querySelector(`.step-verifier .step-${currentStep} .step`).style.backgroundColor = "royalblue";
    
        // Hide the current form
        document.querySelector(`#form${currentStep}`).style.display = "none";
        // Move to the next step
        currentStep++;
        console.log(currentStep)
        
        // Show the next form
        document.querySelector(`#form${currentStep}`).style.display = "flex";
        
        // Update the instruction text
        document.querySelector(".ask").innerHTML = `Step ${currentStep}: Enter details for expenses..`;
    });
    
    document.getElementById(`form2`).addEventListener('submit', function(event) {
        event.preventDefault();
        console.log(currentStep)
    
        // Change the color of the completed step
        // document.querySelector(`.step-verifier div:nth-child(${currentStep}) .step`).style.backgroundColor = "royalblue";
        document.querySelector(`.step-verifier .step-${currentStep} .step`).style.backgroundColor = "royalblue";
    
        // Hide the current form
        document.querySelector(`#form${currentStep}`).style.display = "none";
        console.log(currentStep)
        // Move to the next step
        currentStep++;
    
        // Show the next form
        document.querySelector(`#form${currentStep}`).style.display = "flex";
    
        // Update the instruction text
        document.querySelector(".ask").innerHTML = `Step ${currentStep}: Enter the data for saving..`;
    });
    
    document.getElementById(`form3`).addEventListener('submit', function(event) {
        event.preventDefault();
        console.log(currentStep)
    
        // Change the color of the completed step
        // document.querySelector(`.step-verifier div:nth-child(${currentStep}) .step`).style.backgroundColor = "royalblue";
        document.querySelector(`.step-verifier .step-${currentStep} .step`).style.backgroundColor = "royalblue";
    
        // Move to the next step
        currentStep = 1;
    
        // Show the next form
        // document.querySelector(`#form${currentStep}`).style.display = "flex";
    
        // Update the instruction text
        document.querySelector(".ask").innerHTML = `Step ${currentStep}: data saved succesfully`;
    });
    
    // Repeat similar code for other forms if needed
    
    
});
