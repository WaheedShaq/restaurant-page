const createTabs = () => {
  const content = document.querySelector('#content');

  // create the three div tabs
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');

  // set id's for the divs
  div1.setAttribute('id', 'home-btn');
  div2.setAttribute('id', 'menu-btn');
  div3.setAttribute('id', 'contact-btn');
};

export default createTabs;
