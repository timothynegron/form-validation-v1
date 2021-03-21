// ┌──────────────────┐
// │   User Accounts  │	
// └──────────────────┘
const username = "TimothyNegron";
const password = "helloworld";

// ┌──────────────────┐
// │   Main Program   │	
// └──────────────────┘
main();

function main(){
    setEventListeners();
}

// ┌───────────────┐
// │   Functions   │	
// └───────────────┘

function setEventListeners(){
    document.querySelector("button").addEventListener("click", checkCredentials);
}

function checkCredentials (){

    if(getUsernameAttempt() === username && getPasswordAttempt() === password){
        console.log("Function: CheckCredentials => login successful");
        window.location.href = "https://timothynegron.github.io/My-Projects/";
    }
    
    else{
        console.log("Function: CheckCredentials => login failed");
        messageCredentialsInvalid();
    }
}

function getUsernameAttempt(){
    return document.querySelectorAll("input")[0].value;
}

function getPasswordAttempt(){
    return document.querySelectorAll("input")[1].value;
}

function messageCredentialsInvalid(){
    const invalidText = document.querySelector("p");
    invalidText.innerHTML = "<strong>INVALID CREDENTIALS</strong>"
    invalidText.style.fontSize = "12pt";
    invalidText.style.color = "red";
}