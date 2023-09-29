
const baseURL = '../images/';
const nxt = document.querySelector('.nxt');
const slideshow = document.querySelector('.image');
const puppies = ['puppy1.jpg', 'puppy2.jpg', 'puppy3.jpg', 'puppy4.jpg'];
let index = 1;

nxt.addEventListener('click', function(e) {
    e.preventDefault();

    slideshow.setAttribute('src', baseURL + puppies[index]);
  index = index + 1;
  console.log(index);

  if(index >= puppies.length) {
    index = 0;
  }
});