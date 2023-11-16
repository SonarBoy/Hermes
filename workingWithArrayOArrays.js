let body = [];
body[0] = {"TableName": "Table - 1", "Req" : "Check"};
body[1] = {"TableName": "Table - 2", "Req" : "Water"};
body[2] = {"TableName": "Table - 3", "Req" : "Other"};




const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "cherries";
}

console.log(inventory.find(isCherries));

function isTable1(input){
	return input.TableName == "Table - 1";
	//return input.TableName == name.toString();
}

let name = "Table - 2";

function isTableTest1(input){
	return input.TableName == name;
}



console.log("Body CallBack: " + JSON.stringify(body.findIndex((input) => { return input.TableName == name;})).toString());
console.log("Body: " + JSON.stringify(body.findIndex(isTableTest1)).toString());

if(body.indexOf("Table - 1") >= 0){
	console.log("Contains: " + body.indexOf("Table - 1"));
}


console.log();
