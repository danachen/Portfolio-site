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

const projects = {
  info: [
    { img: 'terminal.jpg',
      name: "Simple Server",
      about: "Server built with <i>bash</i> to deliver simple HTML content requested by browser.",
      tech: "bash",
      deployment: "",
      github: 'https://github.com/danachen/simple-server',
    },
  
    { img: 'book-reader.jpg',
      name: "Book Reader",
      about: "Parses non-copy-right works into user-friendly chapters and search functionality.",
      tech: "Ruby, Sinatra, Javascript, HTML/CSS",
      deployment: "https://book-reader-sherlock.herokuapp.com/",
      github: "https://github.com/danachen/book-reader",
    },
  
    { img: 'file-based-cms.jpg',
      name: "File-Based CMS",
      about: "File-based content management system with sessions & user management.",
      tech: "Ruby, Sinatra, HTML/CSS",
      deployment: "",
      github: 'https://github.com/danachen/file-based-cms',
    },
  
    { img: 'smart-shopping.png',
      name: "Smart Shopping App",
      about: "Mobile-first app, learns buying habits and remember what you’re likely to need to buy on your next trip to the store.",
      tech: "React, Firebase",
      deployment: "https://tcl-35-smart-shopping-list.web.app/",
      github: 'https://github.com/the-collab-lab/tcl-35-smart-shopping-list',
    },

    { img: 'todo-js-oop.jpg',
      name: "Todo JS Backend",
      about: "Todo list backend built with Javascript utilizing OOP Principles with full test suite.",
      tech: "Javascript, HTML/CSS",
      deployment: "",
      github: 'https://github.com/danachen/todo-js-oop',
    },

    { img: 'contact-manager.png',
      name: "Contact Manager",
      about: "Tracks, categorizes, and filters contact email and phone numbers.",
      tech: "Express, NodeJS, JS, HTML/CSS, Handlebars",
      deployment: "hhttps://contact-lite.herokuapp.com/",
      github: 'https://github.com/danachen/contact-manager',
    },
  ]
}

document.addEventListener('DOMContentLoaded', () => {
  const projectTemplate = document.querySelector('#project-template').innerHTML;
  // this is a function that will compile the data
  const compiledProjectTemplate = Handlebars.compile(projectTemplate);
  // now load the object with the function
  document.querySelector('.project-list-container').innerHTML= compiledProjectTemplate(projects);
});