function runJSONProgram(){
    // Creating a JavaScript JSon object
    const data = {
        name: "Fraser",
        age: 17,
        city: "BATHGATE",
    };
    
    // Convert the JavaScript object to a JSON string
    const jsonString = JSON.stringify(data);
    
    // Print the JSON string
    alert("JSonString: " + jsonString);
    
    // Parse a JSON string back into a JavaScript object
    const parsedData = JSON.parse(jsonString);
    
    // Access and print values from the JavaScript object
    alert(("Name:", parsedData.name) + ("\nAge:", parsedData.age) +("\nCity:", parsedData.city));
}

document.getElementById("runJsonButton").addEventListener("click", runJSONProgram);