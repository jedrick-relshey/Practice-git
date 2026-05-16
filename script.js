/* function sayHello() {
    const title = document.querySelector(".title");
    title.innerHTML = "Hello, baby!";
};

function hoverText() {
    let hover = document.querySelector("p");
    hover.innerHTML = "Hovering over the text!";
};

function hoverOut() {
    let hoverout = document.querySelector("p");
    hoverout.innerHTML = "Hover over the text!";
};

function clicktext() {
    let hover = document.querySelector("p");
    hover.style.color = "red";
};

function triggerFocus() {
    const inp = document.querySelector("#textbox");

    inp.style.background = "gray";
    inp.style.color = "blue";
};

const inp = document.querySelector("#textbox");
inp.placeholder = "Type something here...";

function triggerChange() {
    const input = document.querySelector("#box");
    const p = document.querySelector("#paragraph");
    p.innerHTML = input.value;
};

function signIn() {
    const email = document.querySelector("#txtEmail").value;
    const pass = document.querySelector("#txtPassword").value;
    alert(email + "\n" + pass);
};

function submit() {
    const submit = document.querySelector("#chkAgree").checked;
    
    if (submit) {
        alert("Form submitted successfully!");
    } else {
        alert("You have to Click the checkbox to submit the form.");
    };
};  */

function submitForm() {

    const agree = document.querySelector("#chkAgree").checked;

    if (agree) {

        const name = document.querySelector("#firstName").value;
        const last = document.querySelector("#lastName").value;       
        const birthDate = document.querySelector("#birthDate").value; 
        const country = document.querySelector("#country").value;   
        const typesex = document.querySelector("input[name=sextype]:checked").value;

        document.querySelector("#lblFullName").innerHTML = name + " " + last;
        document.querySelector("#lblBirthDay").innerHTML = birthDate;
        document.querySelector("#lblCountry").innerHTML = country;
        document.querySelector("#lblSex").innerHTML = typesex;

    } else {

        alert("You have to Click the checkbox to submit the form.");

    }; 
};

setInterval(() => {
    const body = document.querySelector("body");
    body.style.transition = "1s";
    if (body.style.background === "black") {
        body.style.background = "white"
    }else {
        body.style.background = "black"
    };

},2000); 


/*let fruits1 = ["Apple", "Banana", "Cherry"];
let fruits2 = ["Durian", "Elderberry", "Fig"];

let allFruits = [...fruits1, "mango", ...fruits2];

alert(allFruits);

function summation(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }; 
    return total;
};

let sum = summation(1, 2, 3, 4, 5);
alert(sum);

function allNames(lastName, ...firstName) {
    for (let fName of firstName) {
        alert(fName + " " + lastName);
    };
};

allNames("Smith", "John", "Jane", "Doe"); */


const user = {
    id : 1,
    name: "John",
    age: 30,
    city: "New York"
};

let {id, name, age, city} = user;
alert(id + "\n" +name + "\n" + age + "\n" + city);