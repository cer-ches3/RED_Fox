//Скролл до начала страницы
document.getElementById('arrow-slide-up').onclick=function(){
  document.getElementById('specialButton').scrollIntoView({behavior: "smooth"})
}



//Слайлер для комментариев
var h = setInterval(function(){
  $(".c.active").each(function(){
      var c = +$(this).data('current') || 0;
      var max = +$(this).data('max');
      if(++c <= max){
           $(this).data('current', c).text(c);
      }
      else $(this).removeClass('active');
  });
  if(!$(".c.active").length){
      clearInterval(h);
      console.log('the end');
  }
}, 15);

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);

function nextSlide(){
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slide showing';
}



//Скроллинг при нажании на "Отзывы"
document.getElementById('otziv-btn1').onclick=function() {
  document.getElementById('otziv-box').scrollIntoView({behavior: "smooth"});
}
document.getElementById('otziv-btn2').onclick=function() {
  document.getElementById('otziv-box').scrollIntoView({behavior: "smooth"});
}
document.getElementById('otziv-btn3').onclick=function() {
  document.getElementById('otziv-box').scrollIntoView({behavior: "smooth"});
}
document.getElementById('otziv-btn4').onclick=function() {
  document.getElementById('otziv-box').scrollIntoView({behavior: "smooth"});
}


//Появление Услуг при скроллинге
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.info-box');

for (let elm of elements) {
  observer.observe(elm);
}