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
      about: "Book reader that parses copy-right works into user-friendly chapters and search functionality.",
      tech: "Ruby, Sinatra, Javascript, HTML/CSS",
      deployment: "https://book-reader-sherlock.herokuapp.com/",
      github: "https://github.com/danachen/book-reader",
    },
  
    { img: 'file-based-cms.jpg',
      name: "File-Based CMS",
      about: "File-based content management system with sessions and user management.",
      tech: "Ruby, Sinatra, HTML/CSS",
      deployment: "",
      github: 'https://github.com/danachen/file-based-cms',
    },
  
    { img: 'todo-html.png',
      name: "Todo with HTML/CSS",
      about: "A web and mobile friendly todo list front-end display designed in HTML/CSS.",
      tech: "HTML/CSS",
      deployment: "https://danachen.github.io/todo-html/",
      github: 'https://github.com/danachen/todo-html',
    },

    { img: 'todo-js-oop.jpg',
      name: "Todo JS Backend",
      about: "Todo list backend built with Javascript utilizing OOP Principles with full test suite.",
      tech: "Javascript, HTML/CSS",
      deployment: "",
      github: 'https://github.com/danachen/todo-js-oop',
    },

    { img: 'whack-a-ruby.png',
      name: "Whack a Ruby",
      about: "Implementation of the classic Whack a Mole game.",
      tech: "Javascript, HTML/CSS",
      deployment: "https://whack-a-ruby.herokuapp.com/",
      github: 'https://github.com/danachen/whack-a-ruby',
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