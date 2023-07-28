const retSubmitBtn = document.getElementById("formSubmit");

retSubmitBtn.addEventListener("click", function(e){

    if (isFormValid()){

        const custReq = {

            FirstName: document.getElementById("first-name").value,/*required*/
            LastName: document.getElementById("last-name").value,/*required*/
            Email: document.getElementById("cust-email").value,/*required*/
            HomePhone: document.getElementById("home-phone").value,
            CellPhone: document.getElementById("cell-phone").value,
            Address1: document.getElementById("address1").value,/*required*/
            Address2: document.getElementById("address2").value,
            City: document.getElementById("city").value,
            State: document.getElementById("city").value,
            Zip: document.getElementById("state").value,
            projectReq: document.getElementById("project-descpt").value
        };
    
        localStorage.setItem("custReq", JSON.stringify(custReq));
    
        const currentUrl = window.location.href;
        const redirctUrl = window.location.href.replace(currentUrl, "confirmation.html");
        window.location.href = redirctUrl;
    }

});

function isFormValid(){
    let isValid = false;
    let addressRegex = new RegExp("[A-Za-z0-9'\\.\\-\\s\\,]");
    let cityStateRegex = new RegExp("(^([a-zA-Z]+|[a-zA-Z]+\s[a-zA-Z]+)$)");
    let phoneRegex = new RegExp("^(\\+\\d{1,2}\\s)?\\(\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}$");;
    let zipRegex = new RegExp("^\\d{5}([-\\s]\\d{4})?$");
    let nameRegex = new RegExp("^[a-zA-Z][a-zA-Z\\s]{0,20}[a-zA-Z]$");
    let emailRegex = new RegExp("([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})");
 
    if (nameRegex.test(document.getElementById("first-name").value)){
        isValid = true;
    }
    else{
        isValid = false;
        let error = document.getElementById("fName-error");
        error.innerHTML = "<span style='color:#2300ff'>" + "Please enter a valid First Name!</span>";
    }

    if (nameRegex.test(document.getElementById("last-name").value)){
        isValid = true;
    }
    else{
        isValid = false;
        let error = document.getElementById("lName-error");
        error.innerHTML = "<span style='color:#2300ff'>" + "Please enter a valid Last Name!</span>";
    }

    if (emailRegex.test(document.getElementById("cust-email").value)){
        isValid = true;
    }
    else{
        isValid = false;
        let error = document.getElementById("email-error");
        error.innerHTML = "<span style='color:#2300ff'>" + "Please enter a valid email address!</span>";
    }

    if (phoneRegex.test(document.getElementById("home-phone").value) || document.getElementById("home-phone").value === ""){
        isValid = true;
    }
    else{
        isValid = false;
        let error = document.getElementById("hPhone-error");
        error.innerHTML = "<span style='color:#2300ff'>" + "Please enter a valid phone number!</span>";
    }

    if (phoneRegex.test(document.getElementById("cell-phone").value) || document.getElementById("cell-phone").value === ""){
        isValid = true;
    }
    else{
        isValid = false;
        let error = document.getElementById("cPhone-error");
        error.innerHTML = "<span style='color:#2300ff'>" + "Please enter a valid phone number!</span>";
    }

    if (addressRegex.test(document.getElementById("address1").value)){
        isValid = true;
    }
    else{
        isValid = false;
        let error = document.getElementById("address1-error");
        error.innerHTML = "<span style='color:#2300ff'>" + "Please enter a valid address!</span>";
    }

    if (addressRegex.test(document.getElementById("address2").value) || document.getElementById("address2").value === ""){
        isValid = true;
    }
    else{
        isValid = false;
        let error = document.getElementById("address2-error");
        error.innerHTML = "<span style='color:#2300ff'>" + "Please enter a valid address!</span>";
    }

    if (cityStateRegex.test(document.getElementById("city").value)){
        isValid = true;
    }
    else{
        isValid = false;
        let error = document.getElementById("city-error");
        error.innerHTML = "<span style='color:#2300ff'>" + "Please enter a valid city!</span>";
    }

    if (zipRegex.test(document.getElementById("postal-code").value)){
        isValid = true;
    }
    else{
        isValid = false;
        let error = document.getElementById("zip-error");
        error.innerHTML = "<span style='color:#2300ff'>" + "Please enter a valid zip code!</span>";
    }

    return isValid;
}

function validateField(){

}

    


