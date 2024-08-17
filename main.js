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
        title[i].classList.remove('show')
      });

      description[index].style.display = 'block';
      hideDescription[index].style.display = 'block';
      showDescription[index].style.display = 'none';
      title[index].classList.add('show')
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
      title[index].classList.remove('show')
    });
  }
);
