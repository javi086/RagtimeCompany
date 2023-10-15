/***********INFORMACIÓN EN LA TABLA***************/


function getUserInformation(){
   const name=document.getElementById("name").value;
   const paternal_name=document.getElementById("paternal_name").value;
   const maternal_name=document.getElementById("maternal_name").value;
   const emial=document.getElementById("email").value;
   const sex=identify_sex();
   const message_area=document.getElementById("message_area").value;
   
   let validation=validate_mandatory_info();

   if (validation == "true"){
    const user = new createUser({name, paternal_name, maternal_name, emial, sex, message_area});
    insertUserIntoTable(user);
   cleanInputs();
   }else{
    alert("Favor de llenar todos los campos marcados con (*)");
   }
    
}

function identify_sex() {
    const sex_selected = document.getElementsByName("sex");
    for (var i = 0; i < sex_selected.length; i++) {
        if (sex_selected[i].checked) {
            return sex_selected[i].value;
        }
    }
}

function validate_mandatory_info(){
const mandatory_fields = document.getElementsByName("mandatory_field");
mandatory_fields.forEach(function(mandatory)
{
  if(mandatory.value === null || mandatory.value === ""){
  validation = "false";
  }else{
    validation = "true";
  }
});
return validation;
}

function createUser({name, paternal_name, maternal_name, emial, sex, message_area}) {
    return new Users(name, paternal_name, maternal_name, emial, sex, message_area);
}


function insertUserIntoTable(user){
const table = document.getElementById("registerd_users").getElementsByTagName('tbody')[0];
const row = table.insertRow();
const name_cell = row.insertCell(0);
const paternal_name_cell = row.insertCell(1);
const maternal_name_cell = row.insertCell(2);
const email_cell = row.insertCell(3);
const sex_cell = row.insertCell(4);
const message_cell = row.insertCell(5);

name_cell.textContent = user.name;
paternal_name_cell.textContent = user.paternal_name;
maternal_name_cell.textContent = user.maternal_name;
email_cell.textContent = user.email;
sex_cell.textContent = user.sex;
message_cell.textContent = user.message_area;

}

function cleanInputs(){
    document.getElementById("name").value = "";
    document.getElementById("paternal_name").value = "";
    document.getElementById("maternal_name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message_area").value = ""; 
}

class Users{    
    constructor(name, paternal_name, maternal_name, email, sex, message_area){
        this.name = name;
        this.paternal_name = paternal_name;
        this.maternal_name = maternal_name;
        this.email = email;
        this.sex = sex;
        this.message_area = message_area;
    }   
}

/***********MENSAJES OCULTOS***************/

// TextArea hidden message
let hiddenMessage = document.getElementById("hidden_message");
let messageArea = document.getElementById("message_area");
messageArea.addEventListener("mouseover",  () =>{
    hiddenMessage.classList.add("show_message");
})

messageArea.addEventListener("mouseout", ()=>{
    hiddenMessage.classList.remove("show_message");
})

//General hidden shadow for all elements

let elements = document.getElementsByClassName("general_shadow");
for(let i=0; i<=elements.length; i++){
    elements[i].addEventListener("mouseover", ()=>{
        elements[i].classList.add("shadow");
    })
    elements[i].addEventListener("mouseout", ()=>{
        elements[i].classList.remove("shadow");
    })
}

console.log("holaaa");