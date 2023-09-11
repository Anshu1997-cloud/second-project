// fill in javascript code here
let myForm = document.querySelector("form");

myForm.addEventListener("submit",function(e){

e.preventDefault()

let name = document.getElementById("name").value;
let doctorID = document.getElementById("docID").value;
let specialization = document.getElementById("dept").value;
let experience = document.getElementById("exp").value;
let email = document.getElementById("email").value;
let mobile = document.getElementById("mbl").value;

let Role;
if(experience > 5){
    Role = "Senior";
}else if(experience >=2 && experience <= 5){
    Role = "Junior";
}else{
    Role = "Trainee";
}

let tbody = document.querySelector("tbody");
let row = document.createElement("tr");

let Data = [name, doctorID,specialization, experience, email, mobile,Role]

Data.forEach((ele) =>{
  
    let td = document.createElement("td");
    td.innerText = ele;
    row.appendChild(td)
})

let deleteTd = document.createElement("td");
let deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete";
deleteBtn.style.backgroundColor = "red";

deleteBtn.addEventListener("click",function(){
 tbody.removeChild(row);
})

deleteTd.appendChild(deleteBtn);
row.appendChild(deleteTd);

tbody.appendChild(row);
})

