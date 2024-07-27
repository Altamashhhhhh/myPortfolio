const scriptURL = 'https://script.google.com/macros/s/AKfycbyuzmarwiQ--Uea_h7yB3jWS6IuFCA3l0BTHRgjshsttWGYW68Mp18UZIR1TvsK8y5_0g/exec'
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
  e.preventDefault();

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      console.log('Success!', response);
      
      form.reset();
    })
    .catch(error => console.error('Error!', error.message));
});

// hamburger
document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.querySelector('.toggler');
  const menuItems = document.querySelectorAll('.menu-item');
  const body = document.body;

  toggler.addEventListener('change', function () {
      body.style.overflow = toggler.checked ? 'hidden' : '';
  });

  menuItems.forEach(item => {
      item.addEventListener('click', function () {
          toggler.checked = false;
          body.style.overflow = '';
      });
  });
});

// header sticky 

window.onscroll = function() {
        addStickyClass();
    };

    function addStickyClass() {
        var header = document.getElementById("stickyHeader");
        if (window.pageYOffset > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }




// document.getElementById('mobile-menu').addEventListener('click', function () {
//     const navList = document.querySelector('.nav-list');
//     navList.classList.toggle('show');
// });


// // Clear existing content of the body
// document.body.innerHTML = '';

// // Helper function to create DOM elements
// function createElement(tag, attributes, text) {
//     const element = document.createElement(tag);
//     if (attributes) {
//         for (const key in attributes) {
//             element.setAttribute(key, attributes[key]);
//         }
//     }
//     if (text) {
//         element.textContent = text;
//     }
//     return element;
// }

// // Your HTML code translated to JavaScript DOM
// const header = createElement('header', null, [
//     createElement('h1', { class: 'logo' }, 'SK.'),
//     createElement('nav', null, [
//         createElement('li', null, 'Home'),
//         createElement('li', null, 'Contact'),
//         createElement('li', null, 'Projects'),
//         createElement('li', null, 'Skills'),
//         createElement('li', null, 'Tools'),
//     ]),
//     createElement('button', { type: 'button', onclick: "location.href='#contact'", class: 'btnPrimary' }, 'Let\'s Talk')
// ]);

// const aboutMe = createElement('div', { class: 'aboutMe' }, [
//     createElement('h1', null, [
//         createElement('span', { class: 'italic' }, 'Hi There!👋🏻'),
//         'I\'m ',
//         createElement('span', { class: 'yellow' }, 'SumitKumar'),
//         ' a Web Developer'
//     ]),
//     createElement('div', { class: 'about2' }, [
//         createElement('a', { class: 'bx bxl-github', target: '_blank', href: 'https://github.com/hySumit' }),
//         createElement('a', { class: 'bx bxl-linkedin-square', target: '_blank', href: 'https://www.linkedin.com/in/hy-sumit/' }),
//         createElement('a', { class: 'bx bxl-twitter', target: '_blank', href: 'https://twitter.com/hysumit_' }),
//     ]),
//     createElement('div', { class: 'discuss' }, [
//         createElement('button', { class: 'none' }, [
//             createElement('a', { href: './images/Sumit Kumar-cap04_075-Frontend Developer.pdf', download: '', class: 'resume btn2' }, 'Resume')
//         ]),
//         createElement('button', { type: 'button', onclick: "location.href='#contact'", class: 'btnPrimary2' }, 'Let\'s Talk')
//     ])
// ]);

// const image = createElement('div', { class: 'image' }, [
//     createElement('div', { class: 'box yellow' }),
//     createElement('img', { src: './images/MyImage-removebg-preview.png', alt: '' }),
//     createElement('div', null, [
//         createElement('p', { class: 'aboutLine' }, 'Dynamic Front End Development intern skilled in HTML, CSS, and JavaScript. Proven ability to create responsive interfaces from design concepts. Proficient in Git for version control. Enthusiastic about collaborative problem-solving and eager to adapt to any role within the team.')
//     ])
// ]);

// const skills = createElement('div', { class: 'skills' }, [
//     createElement('h2', null, 'Skills'),
//     createElement('div', { class: 'skillIcons' }, [
//         createElement('i', { class: 'bx bxl-html5' }),
//         createElement('i', { class: 'bx bxl-css3' }),
//         createElement('i', { class: 'bx bxl-javascript' }),
//         createElement('i', { class: 'bx bxl-react' }),
//         createElement('i', { class: 'bx bxl-nodejs' }),
//     ]),
// ]);

// const projects = createElement('div', { class: 'projects' }, [
//     createElement('h2', null, 'Projects'),
//     createElement('div', { class: 'project' }, [
//         createElement('img', { src: './images/project1.jpg', alt: 'Project 1' }),
//         createElement('h3', null, 'Project 1'),
//         createElement('p', null, 'Description of Project 1'),
//     ]),
//     createElement('div', { class: 'project' }, [
//         createElement('img', { src: './images/project2.jpg', alt: 'Project 2' }),
//         createElement('h3', null, 'Project 2'),
//         createElement('p', null, 'Description of Project 2'),
//     ]),
// ]);

// const tools = createElement('div', { class: 'tools' }, [
//     createElement('h2', null, 'Tools'),
//     createElement('div', { class: 'toolIcons' }, [
//         createElement('i', { class: 'bx bxl-git' }),
//         createElement('i', { class: 'bx bxl-figma' }),
//         createElement('i', { class: 'bx bxl-visual-studio-code' }),
//     ]),
// ]);

// const contact = createElement('section', { id: 'contact' }, [
//     createElement('h2', null, 'Contact'),
//     createElement('p', null, 'Feel free to reach out to me!'),
//     createElement('form', { id: 'contactForm' }, [
//         createElement('label', null, 'Name:'),
//         createElement('input', { type: 'text', name: 'name', required: true }),
//         createElement('label', null, 'Email:'),
//         createElement('input', { type: 'email', name: 'email', required: true }),
//         createElement('label', null, 'Message:'),
//         createElement('textarea', { name: 'message', rows: '4', required: true }),
//         createElement('button', { type: 'button', class: 'btnPrimary', onclick: 'submitForm()' }, 'Send Message'),
//     ]),
// ]);

// // Append elements to body
// document.body.appendChild(header);
// document.body.appendChild(aboutMe);
// document.body.appendChild(image);
// document.body.appendChild(skills);
// document.body.appendChild(projects);
// document.body.appendChild(tools);
// document.body.appendChild(contact);

// // Form submission handling
// function submitForm() {
//     const form = document.getElementById('contactForm');
//     const formData = new FormData(form);

//     // You can now access form data using formData.get('name'), formData.get('email'), etc.
//     console.log(formData.get('name'), formData.get('email'), formData.get('message'));

//     // Handle form submission as needed
//     // You can use fetch() or other methods to send data to a server
// }
