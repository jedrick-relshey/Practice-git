let Name = ["JeDrIcK"];
let i = 0;
let uppercase = 0;

while (i < Name.length) {
    if (Name === Name[i].toUpperCase()) {
        uppercase++;
    }
    i++;
}

console.log(uppercase);