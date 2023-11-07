// module for creating the tabs on the homepage

import createRestaurantHomePage from './restaurant';
import createContactPage from './contact';
import createMenuPage from './menu';

const createTabs = () => {
  const content = document.querySelector('#content');
  const header = document.querySelector('#header');

  // create the three div tabs
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');

  // set id's for the divs
  div1.setAttribute('id', 'home-btn');
  div2.setAttribute('id', 'menu-btn');
  div3.setAttribute('id', 'contact-btn');

  // set classes for the divs
  div1.classList.add('tab');
  div2.classList.add('tab');
  div3.classList.add('tab');

  // set text content for the tabs
  div1.textContent = 'Home';
  div2.textContent = 'Menu';
  div3.textContent = 'Contact';

  // append the divs to the header div
  header.appendChild(div1);
  header.appendChild(div2);
  header.appendChild(div3);

  div1.addEventListener('click', () => {
    clearContent();
    createRestaurantHomePage();
  });
  div2.addEventListener('click', () => {
    clearContent();
    createMenuPage();
  });
  div3.addEventListener('click', () => {
    clearContent();
    createContactPage();
  });
};

function clearContent() {
  const content = document.querySelector('#content');
  const pageContent = document.querySelector('.page-content');

  if (pageContent) {
    content.removeChild(pageContent);
  }
}

export default createTabs;
