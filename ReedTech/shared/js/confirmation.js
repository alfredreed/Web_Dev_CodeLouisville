const msgDisplay = document.getElementById("confirmationMsg");

window.addEventListener("DOMContentLoaded", function (e){
    const customerInfo = localStorage.getItem("custReq");

    parseCustData(customerInfo);

    
    // if (customerInfo.preferedContact === "email"){
    //     preferredContact = customerInfo.email;
    // }
    // else if (customerInfo.preferedContact === "phone") {
    //     preferedContact = customerInfo.phoneNumber;
    // }
    // else if (customerInfo.preferedContact === "cell") {
    //     preferedContact = customerInfo.cell;
    // }
    // else if (customerInfo.preferedContact === "mail") {
    //     preferedContact = customerInfo.address1;
    // }
    // displayMessage(custName, "email", custEmail, "Development Need")
});

function parseCustData(custData) {
    let customerInfo = JSON.parse(custData);

    let custName = `${customerInfo.FirstName} ${customerInfo.LastName}`;
    let custEmail = customerInfo.Email;
    
    displayMessage(custName, "email", custEmail, "Development Need")
}


function displayMessage(custName, contactType, contactInfo, reqSubject) {
    let msg = `<h2>Congratulation!!!</h2><br>
    <h3>Greater Innovation is on the Horizon</h3><br>
    Thank you <strong>${custName}</strong>,<br>
    Your project request has been recieved! We are excited at the prospect of a new partnership, and look forward to collaberating with you.
  Note, that the more complex the request the more time the team will need for review. Once the teams review is complete, we'll contact 
  you via <strong>${contactType}</strong> at <strong>${contactInfo}</strong>. Untill then, we appreciate the opportunity to exceed your development need. Welcome to the Reed Technology family. There's nothing we can't achieve together!`;

  msgDisplay.innerHTML = msg;
}