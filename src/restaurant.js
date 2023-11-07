// restaurant.js

const createRestaurantHomePage = () => {
  const content = document.querySelector('#content');
  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content');
  // create and append headline element
  const headLine = document.createElement('h1');
  headLine.textContent = 'Welcome to our restaurant';
  pageContent.appendChild(headLine);

  // create and append image
  const image = document.createElement('img');
  image.src = '../src/photo-1552566626-52f8b828add9.avif';
  image.height = '300';
  pageContent.appendChild(image);

  //create and append a paragraph
  const paragraph = document.createElement('p');
  paragraph.textContent = 'Indulge yourself in authentic Italian experience';
  pageContent.appendChild(paragraph);
  content.appendChild(pageContent);
};

export default createRestaurantHomePage;
