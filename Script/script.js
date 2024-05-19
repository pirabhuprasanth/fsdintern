var menuOpen = false;

function toggleMenu() {
  var navContainer = document.querySelector('.body_section nav');

  if (!menuOpen) {
    navContainer.classList.add('menu_open');

    menuOpen = true;
  } else {
    navContainer.classList.remove('menu_open');
    menuOpen = false;
  }
}
/* __________________________________Dashboard________________________________________________*/

 /* __________________________________project page________________________________________________
  __________________________________________________________________________________ */
  
  


  document.addEventListener('DOMContentLoaded', function() {
    const decreaseBtn = document.querySelector('.decrease-btn');
    const increaseBtn = document.querySelector('.increase-btn');
    const countInput = document.querySelector('.count-input');
  
    decreaseBtn.addEventListener('click', function() {
      let count = parseInt(countInput.value);
      count = isNaN(count) ? 0 : count;
      if (count > 0) {
        count--;
        countInput.value = count;
      }
    });
  
    increaseBtn.addEventListener('click', function() {
      let count = parseInt(countInput.value);
      count = isNaN(count) ? 0 : count;
      count++;
      countInput.value = count;
    });
  });
 var counter=1
 setInterval(function)