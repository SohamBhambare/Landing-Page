const menu = document.getElementById('navbar__list');
const totalSecs = Array.from(document.querySelectorAll('section'));
let listItems = totalSecs.length;

function newListItem() {
  for (section of totalSecs) {
    name = section.getAttribute('data-nav');
    link = section.getAttribute('id');
    item = document.createElement('li');
    item.innerHTML = `<a class='menu__link' href='#${link}'>${name}</a>`;
    menu.appendChild(item);
  }
}

function sectionInViewPort(element) {
  let position = element.getBoundingClientRect();
  return (position.top >= 0);
}

// Scroll event listener
document.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;

  totalSecs.forEach(function(section) {
    const rect = section.getBoundingClientRect();
    const link = menu.querySelector(`[href="#${section.id}"]`);

    if (rect.top >= 0 && rect.top <= window.innerHeight * 0.5) {
      section.classList.add('your-active-class');
      if (link) {
        link.classList.add('active');
      }
    }
    else {
      section.classList.remove('your-active-class');
      if (link) {
        link.classList.remove('active');
      }
    }
  });
});

newListItem();


document.addEventListener('scroll', toggleActiveClass);
