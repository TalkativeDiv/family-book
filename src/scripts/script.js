 
/*
? Info:
? This program will change an image when a button is clicked, 
? to create a virtual book.
* Code Summary:
* There is a list that contains each pages's source image
* We have a variable which is a flag for the index of the list
* We Have a event listener that fires when the button is clicked
* when the button is clicked, we check if the index is greater than 3,
* if so change the index back to 0, else we add one to the index
* then we change the image src to the list with a index of the variable index.
*/
 
const menuOpen = document.querySelector(".menu");
const menuClose = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const btnNext = document.getElementById("btnNext");
const lblName = document.getElementById('lblName')
const img = document.getElementById("book");
const pages = ['/public/pages/Abhirath.jpg','/public/pages/Shakuntala.jpg','/public/pages/Arun.jpg','/public/pages/cover.png'];
const names = ['Abhi','Shakuntala','Arun','Cover'];
let index = 0;

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});


btnNext.addEventListener('click', () => {
  if (index === 3) index = 0;
  else index++;
  img.src = pages[index];
	lblName.innerText = names[index];
});