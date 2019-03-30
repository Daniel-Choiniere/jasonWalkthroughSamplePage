console.log("this script works");

function myApp() {
    document.getElementById("button").addEventListener("click", logButton);
}

function logButton() {
    console.log("this button has been clicked!");
}

