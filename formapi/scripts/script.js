//Generate the ages for the age dropdown
window.onload = function() {
    const ageSelection = document.getElementById("age");

    //Create a for loop that generates up to 99
    for (let i = 1; i <= 100; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.text = i;
        ageSelection.add(option);
    }
};

//Create formapi validation function
document.getElementById("userForm").addEventListener("submit", function(event){
    //Prevent regular form submission
    event.preventDefault();

    //Get the form
    const form = event.target;

    //Create a form data object
    const userFormData = new FormData(form);

    //Create a isvalid variable
    let isValid = true;

    //Create an error message array
    const errorMessage = [];

    //Create email validation
    const emailFormField = form.querySelector("#email");
    if (!emailFormField.value.includes("@")) {
        isValid = false;

        //Create an error message and push to array
        errorMessage.push("Please enter a valid email address.");
    }

    //Create phone number validation
    const phoneNumberFormField = form.querySelector("#phoneNumber");
    
    //Create a regex for phone number validation
    const phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneNumberRegex.test(phoneNumberFormField.value)) {
        isValid = false;

        //Create an error message and push to array
        errorMessage.push("Please enter a valid phone number format (xxx-xxx-xxxx).");
    }

    //Create address validation
    const addressFormField = form.querySelector("#address");

    //Create a regex for address validation
    const addressRegex = /^[a-zA-Z0-9\s,'-]*$/;
    if (!addressRegex.test(addressFormField.value)) {
        isValid = false;

        //Create an error message and push to array
        errorMessage.push("Please enter a valid Street address.");
    }


    //Show the form validation errors
    if (!isValid) {
        alert(errorMessage[0]);
        return;
    }

    //Create an if statement to check if form submitted is valid
    if (form.checkValidity()) { //Use checkValidity from Form API to validate form
        //Create an alert that the form is valid
        alert("Form Submitted Successfully!");

        //Reset the form 
        form.reset();
    } else {
        //Show form validation errors
        form.reportValidity();
    }
});