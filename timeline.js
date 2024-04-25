// VARIABLES
const elH = document.querySelectorAll(".timeline li > div");

window.addEventListener('load', function() {
  document.getElementById('loading').style.display = 'none';
});


// START
window.addEventListener("load", init);

function init() {
  setEqualHeights(elH);
}

// SET EQUAL HEIGHTS
function setEqualHeights(el) {
  let counter = 0;
  for (let i = 0; i < el.length; i++) {
    const singleHeight = el[i].offsetHeight;

    if (counter < singleHeight) {
      counter = singleHeight;
    }
  }

  for (let i = 0; i < el.length; i++) {
    el[i].style.height = `${counter}px`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const currentLocation = window.location.href;
  const menuItems = document.querySelectorAll('.navbar a'); // Target links within .navbar
  menuItems.forEach(item => {
    if (item.href === currentLocation) {
      item.classList.add('active');
    }
  });
});
