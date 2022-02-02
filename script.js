/**
 * Traverse the DOM tree using querySelector() and querySelectorAll()
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
 */

import university from "./university.js";

const theUniv = new university(
  "Private University",
  1881,
  "San Antonio,TX",
  9366,
  "Red and Black",
  "logo.svg"
);

const content = `
     <figure class="backpack__image">
       <img src=${theUniv.logo} alt="University Logo" />
     </figure>
     <h4 class="backpack__name"> ${theUniv.type}</h4>
     <ul class="backpack__features">
     <li> Established: ${theUniv.established}</li>
     <li> City: ${theUniv.city}</li>
     <li> Students: ${theUniv.studentsNumber}</li>
     <li> Color: ${theUniv.color}</li>
     </ul>
   </article>
 `;

const main = document.querySelector(".maincontent");


const newArticle = document.createElement('article');
newArticle.classList.add('university');
newArticle.setAttribute('id','everyday');
newArticle.innerHTML = content;

main.append(newArticle);

//main.innerHTML = content;



// const listItem = document.querySelector("ul li:first-child");

// listItem.classList.toggle("webdev");

// const backpackTitle = document.querySelector('h1').className;
// document.querySelector('img').setAttribute('alt', backpackTitle);
