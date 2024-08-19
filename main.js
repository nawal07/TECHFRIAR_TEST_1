// Drop down Menu bar Open on click 

document.getElementById('humburgerIcon').addEventListener('click', function () {
  const dropDownMenu = document.getElementById('dropDownMenu');
  const mainPage = document.getElementById('mainPage');

  dropDownMenu.style.display = 'block';
  mainPage.classList.add('fade');
});

// Drop down Menu bar Hide on click 
document.getElementById('hideDropdownMenu').addEventListener('click', function () {
  const dropDownMenu = document.getElementById('dropDownMenu');
  const mainPage = document.getElementById('mainPage');

  dropDownMenu.style.display = 'none';
  mainPage.classList.remove('fade');
});

// Book Car Menu section Show on click 

document.getElementById('bookCar').addEventListener('click', function (event) {
  const bookCarMenu = document.getElementById('bookCarMenu');
  if (bookCarMenu.style.display == 'none') {
    bookCarMenu.style.display = 'flex';
  } else {
    bookCarMenu.style.display = 'none';
  }

  event.stopPropagation();
});

// Book Car Menu section Hide on clicking anywhere else in window

document.addEventListener('click', function (event) {
  const bookCarMenu = document.getElementById('bookCarMenu');
  const bookCarButton = document.getElementById('bookCar');

  if (
    !bookCarMenu.contains(event.target) &&
    !bookCarButton.contains(event.target)
  ) {
    bookCarMenu.style.display = 'none';
  }
});

// Book Car for same pickup location option 

document.getElementById('same-pick').addEventListener('click', function () {
  const differntDropOff = document.getElementById('differnt-drop-location');
  const samePickUp = document.getElementById('same-pick');
  const diffDrop = document.getElementById('differnt-drop');

  samePickUp.classList.add('active');
  samePickUp.classList.remove('inactive');
  diffDrop.classList.add('inactive');
  differntDropOff.style.display = 'none';
});

// Book Car for different pickup location option 

document.getElementById('differnt-drop').addEventListener('click', function () {
  const differntDropOff = document.getElementById('differnt-drop-location');
  const samePickUp = document.getElementById('same-pick');
  const diffDrop = document.getElementById('differnt-drop');

  samePickUp.classList.add('inactive');
  diffDrop.classList.remove('inactive');
  differntDropOff.style.display = 'flex';
});

// Show decription of each FAQs 

Array.prototype.forEach.call(
  document.getElementsByClassName('showDescription'),
  function (element, index) {
    element.addEventListener('click', function () {
      const description = document.getElementsByClassName('description');
      const title = document.getElementsByClassName('title');
      const hideDescription =
        document.getElementsByClassName('hideDescription');
      const showDescription =
        document.getElementsByClassName('showDescription');

      Array.prototype.forEach.call(description, function (desc, i) {
        desc.style.display = 'none';
        hideDescription[i].style.display = 'none';
        showDescription[i].style.display = 'block';
        title[i].classList.remove('show');
      });

      description[index].style.display = 'block';
      hideDescription[index].style.display = 'block';
      showDescription[index].style.display = 'none';
      title[index].classList.add('show');
    });
  }
);

// Hide decription of each FAQs 

Array.prototype.forEach.call(
  document.getElementsByClassName('hideDescription'),
  function (element, index) {
    element.addEventListener('click', function () {
      const description = document.getElementsByClassName('description');
      const title = document.getElementsByClassName('title');
      const hideDescription =
        document.getElementsByClassName('hideDescription');
      const showDescription =
        document.getElementsByClassName('showDescription');

      description[index].style.display = 'none';
      hideDescription[index].style.display = 'none';
      showDescription[index].style.display = 'block';
      title[index].classList.remove('show');
    });
  }
);
