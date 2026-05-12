const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

const allH1 = document.querySelectorAll("h1");
console.log(allH1);

const comments = document.getElementsByClassName("comment");
console.log(comments[5]);

const allContent = document.querySelector("#first-heading");
allContent.innerHTML = "This is the new content";

const allParagraphs = document.querySelectorAll(".comment");
allParagraphs[0].innerHTML = "This is the new content for all paragraphs";

const textFirstName = document.querySelector("#textName");
textFirstName.placeholder = "Enter your first name";

const image = document.querySelector("#image-example");
image.src = "../profile2.jpg";

const linkexample = document.querySelector("#link");
linkexample.href = "https://www.google.com/";
linkexample.target = "_blank";
linkexample.innerHTML = "Go to Google";

const b = document.querySelector("body");
b.style.backgroundColor = "rgba(34, 34, 34, 1)";

let h1 = document.querySelector("h1"); 
h1.style.textAlign = "center";
h1.style.fontFamily= "monserrat, sans-serif";
h1.style.color = "gold";
h1.style.borderBottom = "2px solid gold";
