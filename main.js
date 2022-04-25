let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let wrotes = document.getElementById("wrotes");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("button clicked");

    formValidation();
})

let formValidation = () => {
    if (input.value===""){
        msg.innerHTML="You can not leave it blank";
        console.log("failure");
    }
    else{
        console.log("Success");
        msg.innerHTML="";
        acceptData();
    }
};

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    write();
};

let write = () => {
    wrotes.innerHTML += `
    <div>
    <p>${data.text}</p>
    <span class="option">
      <i onClick="edit(this)" class="fas fa-edit"></i>
      <i onClick="deletee(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>
    `;
    input.value = "";
};

let deletee = (e) => {
    e.parentElement.parentElement.remove();
  };

let edit = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};