import React from 'react';
import ReactDOM from 'react-dom';
require('../main.scss');


document.addEventListener("DOMContentLoaded", function () {

  function animate(elem, style, unit, from, to, time, prop) {
      if (!elem) {
          return;
      }
      var start = new Date().getTime(),
          timer = setInterval(function () {
              var step = Math.min(1, (new Date().getTime() - start) / time);
              if (prop) {
                  elem[style] = (from + step * (to - from))+unit;
              } else {
                  elem.style[style] = (from + step * (to - from))+unit;
              }
              if (step === 1) {
                  clearInterval(timer);
              }
          }, 25);
      if (prop) {
            elem[style] = from+unit;
      } else {
            elem.style[style] = from+unit;
      }
  }


let butt = document.querySelector('.butt');

butt.addEventListener('click', function(event){

  event.preventDefault();
  let cos = document.querySelector('.some1');
  animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, cos.offsetTop, 2000, true);
});

// let bb = document.querySelector('#flipto');
//
// bb.addEventListener("click", function(event) {
//   event.preventDefault();
//
//   var face = this.data("face");
//   let cube = document.querySelector('.cube');
//
//   if ( face == "bottom" ) {
//     cube.removeClass("flip-to-top").addClass("flip-to-bottom");
//     this.data("face", "top").text("Flip: to top");
//   } else {
//     cube.removeClass("flip-to-bottom").addClass("flip-to-top");
//     this.data("face", "bottom").text("Flip: to bottom");
//   }
// });

ReactDOM.render(
  <div id="slider">
<figure>
<img src="./img/slajd1-min.png"/>
<img src="./img/slajd2-min.png"/>
<img src="./img/slajd3-min.png"/>
<img src="./img/slajd4-min.png"/>
</figure>
</div>,
    document.getElementById('app')
);


let bb = document.querySelector('.butt');
let active = document.querySelector('.active-state');
let defaul = document.querySelector('.default-state');

bb.addEventListener('click', function(event){
  event.preventDefault();

  active.classList.toggle('active-state');
  active.classList.toggle('default-state');
  defaul.classList.toggle('active-state');
  defaul.classList.toggle('default-state');
})





});
