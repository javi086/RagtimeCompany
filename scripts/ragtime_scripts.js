function getUserInformation(){
console.log("Get user information");
   const name=document.getElementById("name").value;
   const paternal_name=document.getElementById("paternal_name").value;
   const maternal_name=document.getElementById("maternal_name").value;
   const emial=document.getElementById("email").value;
   const message=document.getElementById("message").value;

   const user = new createUser({name, paternal_name, maternal_name, emial, message});
   insertUserIntoTable(user);
  // cleanInputs();
}

function createUser({name, paternal_name, maternal_name, emial, message}) {
    console.log("Create user");
    return new Users(name, paternal_name, maternal_name, emial, message);
}


function insertUserIntoTable(user){
    console.log("User into table");
const table = document.getElementById("registerd_users").getElementsByTagName('tbody')[0];
const row = table.insertRow();
const name_cell = row.insertCell(0);
const paternal_name_cell = row.insertCell(1);
const maternal_name_cell = row.insertCell(2);
const email_cell = row.insertCell(3);
const message_cell = row.insertCell(4);

name_cell.textContent = user.name;
paternal_name_cell.textContent = user.paternal_name;
maternal_name_cell.textContent = user.maternal_name;
email_cell.textContent = user.email;
message_cell.textContent = user.message;

console.log(name_cell);

}

function cleanInputs(){
    console.log("Cleaning");
    document.getElementById("name").value = "";
    document.getElementById("paternal_name").value = "";
    document.getElementById("maternal_name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}

class Users{    
    constructor(name, paternal_name, maternal_name, email, message){
        this.name = name;
        this.paternal_name = paternal_name;
        this.maternal_name = maternal_name;
        this.email = email;
        this.message = message;
    }   
}
// Get tooltip elements
var oculto = document.getElementById("oculto");
// Function to show tooltip
function showTooltip(ejemplo) {
    ejemplo.classList.add("show");
}

// Function to hide tooltip
function hideTooltip(ejemplo) {
    ejemplo.classList.remove("show");
}

document.body.getElementById("message").onmouseover = function() {
    showTooltip(oculto);
};

document.body.getElementById("message").onmouseout = function() {
    hideTooltip(oculto);
};