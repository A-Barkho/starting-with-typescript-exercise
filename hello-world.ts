
function doIt(): void {
    const theText: string = "Hello World";
    alert(theText);
}
function uName(): void {
    var fName:string;
    var lName:string;
    fName=prompt("Vorname!");
    lName=prompt("Nachname!");
    document.getElementById("firstHeader").innerHTML=("Hallo "+fName+" "+lName);
}
