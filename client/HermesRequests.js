let getButton = document.getElementById("simpleGetButton");
let deleteButton = document.getElementById("simpleDeleteButton");

let tablesDropDown = document.getElementById("tableNumberDropdown");
let optionsDropDown = document.getElementById("tableRequestDropdown"); 
let deletionDropDown = document.getElementById("tableDeletionOption");


let local= "";
let postingToQueueURL = "/TestBodyPassing";
let deletingFromQueueURL = "/TestBodyDeletion";

let postingToQueueRequest = new XMLHttpRequest();
let deletingFromQueueRequest = new XMLHttpRequest();

function addingToTheQueueFunction(){    
    postingToQueueRequest.open("POST",local + postingToQueueURL);
    postingToQueueRequest.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

    let body = JSON.stringify({ "TableName": tablesDropDown.value, "Req": optionsDropDown.value });
    
    postingToQueueRequest.send(body);
}

function deletingFromQueueFunction(){
    deletingFromQueueRequest.open("POST",local + deletingFromQueueURL);
    deletingFromQueueRequest.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

    let body = JSON.stringify({"Deletion":deletionDropDown.value});

    deletingFromQueueRequest.send(body);
}



let testerFunction = function(){
    alert("Hello! I am an alert box!!");
}

deletingFromQueueRequest.onreadystatechange = function(){
     
    if(deletingFromQueueRequest.readyState === XMLHttpRequest.UNSENT){
        console.log("Request Has been Created");
    }else if(deletingFromQueueRequest.readyState === XMLHttpRequest.OPENED){
        console.log("Open has been called");
    }else if(deletingFromQueueRequest.readyState === XMLHttpRequest.HEADERS_RECEIVED){
        console.log("Send Has been Called");
    }else if(deletingFromQueueRequest.readyState === XMLHttpRequest.LOADING){
        console.log("Loading....");
    }else if(deletingFromQueueRequest.readyState === XMLHttpRequest.DONE){

        console.log("YAY!! THIS IS WHAT WE RECIEVED!");


        let out = document.getElementById("output");

        out.innerHTML = '';
    
        let item = document.createElement("div", { class: "text-bg-danger" });
    
        let tblDisplay = document.createElement("h1", { class: "text-bg-danger" });
        let reqDisplay = document.createElement("h3", { class: "text-bg-danger" });
    
        item.style.color = "white";
        tblDisplay.style.color = "white";
        reqDisplay.style.color = "white";
    
        let currentList = JSON.parse(deletingFromQueueRequest.response);
    
        console.log("Current List: " + currentList["list"]);
        console.log(currentList["list"]);
        
    
        //Direct item text.
        //item.textContent = postingToQueueRequest.response;
    
        //item.textContent += "<div>";
    
        deletionDropDown.innerHTML = '';
    
        for(let indx = 0; indx < currentList["list"].length; indx++){
            deletionDropDown.innerHTML +=`<option value="${indx}">Index ${indx}</option>`; 
        }
    
        
    
        
        for(let indx = 0; indx < currentList["list"].length; indx++){
    
    
            item.innerHTML += `
                <h1> ${currentList["list"][indx].TableName} </h1>
                <h2> ${currentList["list"][indx].Req} </h2>
            `;
    
            // tblDisplay.textContent = currentList["list"][indx].TableName;
            // reqDisplay.textContent =  currentList["list"][indx].Req; 
    
            // item.appendChild(tblDisplay);
            // item.appendChild(reqDisplay);
    
    
           
            // item.textContent += "<p>" + currentList["list"][indx].TableName 
            // + " <br/> " + currentList["list"][indx].Req 
            // + "</p>";
        }
    
        //item.textContent += "</div>";
        
    
    
        //item.at
        out.appendChild(item);


    }else{
        console.error("Request Error");
    }



    // }else {

    //     this.updateDisplay.call();
    //     testerFunction();

    //     console.log("Request Error");
    // }

}



postingToQueueRequest.onreadystatechange =  function(){

    if(postingToQueueRequest.readyState === XMLHttpRequest.UNSENT){
        console.log("Request Has been Created");
    }else if(postingToQueueRequest.readyState === XMLHttpRequest.OPENED){
        console.log("Open has been called");
    }else if(postingToQueueRequest.readyState === XMLHttpRequest.HEADERS_RECEIVED){
        console.log("Send Has been Called");
    }else if(postingToQueueRequest.readyState === XMLHttpRequest.LOADING){
        console.log("Loading....");
    }else if(postingToQueueRequest.readyState === XMLHttpRequest.DONE){
        let out = document.getElementById("output");

        out.innerHTML = '';
    
        let item = document.createElement("div", { class: "text-bg-danger" });
    
        let tblDisplay = document.createElement("h1", { class: "text-bg-danger" });
        let reqDisplay = document.createElement("h3", { class: "text-bg-danger" });
    
        item.style.color = "white";
        tblDisplay.style.color = "white";
        reqDisplay.style.color = "white";
    
        let currentList = JSON.parse(postingToQueueRequest.response);
    
        console.log(currentList["list"]);
        
    
        //Direct item text.
        //item.textContent = postingToQueueRequest.response;
    
        //item.textContent += "<div>";
    
        deletionDropDown.innerHTML = '';
    
        for(let indx = 0; indx < currentList["list"].length; indx++){
            deletionDropDown.innerHTML +=`<option value="${indx}">Index ${indx}</option>`; 
        }
    
        
    
        
        for(let indx = 0; indx < currentList["list"].length; indx++){
    
    
            item.innerHTML += `
                <h1> ${currentList["list"][indx].TableName} </h1>
                <h2> ${currentList["list"][indx].Req} </h2>
            `;
    
            // tblDisplay.textContent = currentList["list"][indx].TableName;
            // reqDisplay.textContent =  currentList["list"][indx].Req; 
    
            // item.appendChild(tblDisplay);
            // item.appendChild(reqDisplay);
    
    
           
            // item.textContent += "<p>" + currentList["list"][indx].TableName 
            // + " <br/> " + currentList["list"][indx].Req 
            // + "</p>";
        }
    
        //item.textContent += "</div>";
        
    
    
        //item.at
        out.appendChild(item);


    }else{
        console.error("Request Error");
    }
}


updateDisplay =  function() {
    console.log("Request Hit the server");
    //console.log(postingToQueueRequest.response);

    let out = document.getElementById("output");

    out.innerHTML = '';

    let item = document.createElement("div", { class: "text-bg-danger" });

    let tblDisplay = document.createElement("h1", { class: "text-bg-danger" });
    let reqDisplay = document.createElement("h3", { class: "text-bg-danger" });

    item.style.color = "white";
    tblDisplay.style.color = "white";
    reqDisplay.style.color = "white";

    let currentList = JSON.parse(postingToQueueRequest.response);

    console.log(currentList["list"]);
    

    //Direct item text.
    //item.textContent = postingToQueueRequest.response;

    //item.textContent += "<div>";

    deletionDropDown.innerHTML = '';

    for(let indx = 0; indx < currentList["list"].length; indx++){
        deletionDropDown.innerHTML +=`<option value="${indx}">Index ${indx}</option>`; 
    }

    

    
    for(let indx = 0; indx < currentList["list"].length; indx++){


        item.innerHTML += `
            <h1> ${currentList["list"][indx].TableName} </h1>
            <h2> ${currentList["list"][indx].Req} </h2>
        `;

        // tblDisplay.textContent = currentList["list"][indx].TableName;
        // reqDisplay.textContent =  currentList["list"][indx].Req; 

        // item.appendChild(tblDisplay);
        // item.appendChild(reqDisplay);


       
        // item.textContent += "<p>" + currentList["list"][indx].TableName 
        // + " <br/> " + currentList["list"][indx].Req 
        // + "</p>";
    }

    //item.textContent += "</div>";
    


    //item.at
    out.appendChild(item);

};




getButton.addEventListener("click",addingToTheQueueFunction);
deleteButton.addEventListener("click",deletingFromQueueFunction);
