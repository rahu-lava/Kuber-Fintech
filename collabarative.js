function getUserInput() {
    // Prompt the user for input
    const userInput = prompt("Enter something:");

    // Display the entered data using alert
    // alert(You entered: ${userInput});

    // Display the entered data in a container
    const outputContainer = document.querySelector(".collab-middle-second .card2")
    outputContainer.innerHTML += `<b><span  style="background-color : rgba(128, 128, 128, 0.178);border-radius : 8px ;padding : 8px">bill split : ${userInput} </span></b> <br>`;
}
function setReminder() {
    // Prompt the user for input
    const userInput = prompt("Enter something:");

    // Get the current date and time
    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleDateString()} `;

    // Display the entered data along with the current date in a container
    const outputContainer = document.querySelector(".collab-middle-second .card3");
    outputContainer.innerHTML +=` <b><span style="background-color : rgba(128, 128, 128, 0.178);border-radius : 8px ;padding : 8px">${formattedDate} : ${userInput}</b> <br>`;
}
function sendMessage() {
    
    // document.querySelector(".collab-middle-next i").addEventListener("click" , ()=> {
        let message = document.querySelector("#chat-input").value;
        console.log(message)
        document.querySelector(".chart-section .male").innerHTML += `<span style="background-color : rgba(128, 128, 128, 0.178);border-radius : 8px ;padding : 8px">${message}</span> <br>`; 
        document.querySelector(".chart-section .female").innerHTML += `<span style="background-color : rgba(128, 128, 128, 0.178);border-radius : 8px ;padding : 8px">hello</span><br> `; 
        document.querySelector(".chart-section .female").innerHTML +=` <span style="background-color : rgba(128, 128, 128, 0.178);border-radius : 8px ;padding : 8px">how are you?</span> <br>`; 


};