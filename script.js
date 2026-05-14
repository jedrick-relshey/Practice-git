function sayHello() {
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
