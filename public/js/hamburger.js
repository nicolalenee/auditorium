document.addEventListener('DOMContentLoaded', () => {
  const $hamburgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // if there's any hamburgers
  if ($hamburgers.length > 0) {

    // add a cheesy click for each delicious hamburger
    $hamburgers.forEach( el => {
      el.addEventListener('click', () => {

        // grab the lettuce from the target
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // toggle between plain buns or seasame seed
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
});
