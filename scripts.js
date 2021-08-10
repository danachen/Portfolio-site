let images = document.querySelectorAll('img');
for (let image of Array.from(images)) {
  image.classList.add('rounded');
}

let cards = document.getElementsByClassName('card');
let newClasses = ['shadow', 'p-3', 'mb-5', 'bg-white', 'rounded'];
for (let card of Array.from(cards)) {
  card.classList.add(...newClasses);
}

let jumbotron = document.querySelector('.jumbotron');
let topNav = document.querySelector('.nav-top-right');
let bottomNav = topNav.cloneNode(true);
bottomNav.classList.add('navbar-bottom');
bottomNav.classList.add('justify-content-center');

let navBottom = document.querySelector('.nav-navbar-bottom');
navBottom.appendChild(bottomNav);
footer.appendChild(bottomNav)