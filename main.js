let form = document.querySelector("form");
let emailInput = document.querySelector(".email");
let errorMessage = document.querySelector(".error-message");

function handleSubmit(event){
    event.preventDefault();
    let email = emailInput.value;
    if(email.length <= 4 || !email.includes("@")){
        emailInput.classList.toggle("error");
        errorMessage.classList.toggle("hide");
    }
    else{
        window.location.reload();
    }
}

form.addEventListener("submit", handleSubmit);