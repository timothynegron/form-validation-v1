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
        console.log("login successful");
    }else{
        console.log("login failed");
    }

}

function getUsernameAttempt(){
    return document.querySelectorAll("input")[0].value;
}

function getPasswordAttempt(){
    return document.querySelectorAll("input")[1].value;
}
