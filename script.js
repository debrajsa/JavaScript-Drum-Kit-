//console.log('hello!');

//const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//const removeTransition = e;

/*
function playSound() {
  {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // stop function from running
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
  }

  const removeTransition = (e) => {
    if (e.propertyName !== 'transform') return; // skip if not a transform
    e.target.classList.remove('playing');
  };

  const keys = document.querySelectorAll('.key');
  keys.forEach((key) =>
    key.addEventListener('transitionend', removeTransition)
  );

  window.addEventListener('keydown', playSound);
}
*/
