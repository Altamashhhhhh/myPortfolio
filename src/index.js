const scriptURL = 'https://script.google.com/macros/s/AKfycbyuzmarwiQ--Uea_h7yB3jWS6IuFCA3l0BTHRgjshsttWGYW68Mp18UZIR1TvsK8y5_0g/exec'
const form = document.forms['submit-to-google-sheet'];

function downloadAndOpen() {
    const url = 'https://drive.google.com/uc?export=download&id=1tdK3xC-2mk16nhvubIreN5WbHhYP_ImI';
    window.open('https://drive.google.com/file/d/1tdK3xC-2mk16nhvubIreN5WbHhYP_ImI/view?usp=sharing', '_blank');

    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = url;
    document.body.appendChild(iframe);
    setTimeout(() => document.body.removeChild(iframe), 5000);
}

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

