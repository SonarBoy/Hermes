let getButton = document.getElementById("simpleGetButton");
let tablesDropDown = document.getElementById("tableNumberDropdown");
let optionsDropDown = document.getElementById("tableRequestDropdown"); 


let local= "";
let postingToQueueURL = "/TestBodyPassing";

let postingToQueueRequest = new XMLHttpRequest();

function addingToTheQueueFunction(){    
    postingToQueueRequest.open("POST",local + postingToQueueURL);
    postingToQueueRequest.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

    let body = JSON.stringify({ "TableName": tablesDropDown.value, "Req": optionsDropDown.value });
    
    postingToQueueRequest.send(body);
}



let testerFunction = function(){
    alert("Hello! I am an alert box!!");
}


getButton.addEventListener("click",addingToTheQueueFunction);