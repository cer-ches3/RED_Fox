//Появлениек элементов в "video-box"
setTimeout(function() {
    document.getElementById('text-video1').style.display = 'block';
 }, 3000);
 setTimeout(function() {
    document.getElementById('text-video2').style.display = 'block';
 }, 6000);
 setTimeout(function() {
   document.getElementById('video-box-button').style.display = 'block';
}, 8000);
setTimeout(function() {
   document.getElementById('sliderShowDate').style.display = 'block';
}, 9000);

document.getElementById('sliderShowDate').onclick=function() {
   document.getElementById('info-box').style.display = 'block';
   document.getElementById('info-box').scrollIntoView({behavior: "smooth"});
}


//Скролл до начала страницы
document.getElementById('arrow-slide-up').onclick=function(){
   document.getElementById('specialButton').scrollIntoView({behavior: "smooth"})
}
