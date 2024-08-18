document.getElementById('bookCar').addEventListener('click', function (event) {
  const bookCarMenu = document.getElementById('bookCarMenu');
  if (bookCarMenu.style.display == 'none') {
    bookCarMenu.style.display = 'flex';
  } else {
    bookCarMenu.style.display = 'none';
  }

  event.stopPropagation();
});

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

document.getElementById('same-pick').addEventListener('click', function () {
  const differntDropOff = document.getElementById('differnt-drop-location');
  const samePickUp = document.getElementById('same-pick');
  const diffDrop = document.getElementById('differnt-drop');

  samePickUp.classList.add('active');
  samePickUp.classList.remove('inactive');
  diffDrop.classList.add('inactive');
  differntDropOff.style.display = 'none';
});

document.getElementById('differnt-drop').addEventListener('click', function () {
  const differntDropOff = document.getElementById('differnt-drop-location');
  const samePickUp = document.getElementById('same-pick');
  const diffDrop = document.getElementById('differnt-drop');

  samePickUp.classList.add('inactive');
  diffDrop.classList.remove('inactive');
  differntDropOff.style.display = 'flex';
});

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
