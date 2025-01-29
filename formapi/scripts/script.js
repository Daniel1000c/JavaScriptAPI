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