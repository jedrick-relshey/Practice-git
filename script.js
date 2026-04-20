let names = ["Jedrick", "LUis", "Jacob", "zaijan"];
let searchNames = "JEDRICK";
let Found = false;

for (let i = 0;i < names.length; i++) {
    
    if (names[i].toLowerCase() === searchNames.toLowerCase()) { 
        Found = true
        console.log(`Found ${names[i]}`);
        break;
    }
}
if (!Found) {
    console.log("Not Found");
}