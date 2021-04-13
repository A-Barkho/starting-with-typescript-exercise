function doIt() {
    var theText = "Hello World";
    alert(theText);
}
function uName() {
    var fName;
    var lName;
    fName = prompt("Vorname!");
    lName = prompt("Nachname!");
    document.getElementById("firstHeader").innerHTML = ("Hallo " + fName + " " + lName);
}
