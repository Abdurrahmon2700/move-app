let imgs = document.getElementById ('imgs');
let btns = document.querySelectorAll ('#btn')
let arrayimg = document.querySelectorAll('#imgs img');

function changeimg (count) {
    --count
  imgs.style.transform = `translateY(${-count * 102}vh)`;
}
for(let btn of btns){
  btn.addEventListener( 'click', function change() {
    changeimg(btn.textContent);
  });
}
