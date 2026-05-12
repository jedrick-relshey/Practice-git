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
image.src = "https://www.w3schools.com/images/w3schools_green.jpg";