//Скролл до начала страницы
document.getElementById('arrow-slide-up').onclick=function(){
    document.getElementById('specialButton').scrollIntoView({behavior: "smooth"})
 }



//Действие при нажатии "Открыть"
document.getElementById('btn-open1').onclick=function() {
    document.getElementById('invisible-box1').style.display = 'block';
    document.getElementById('btn-open1').style.display = 'none';
    document.getElementById('btn-close1').style.display = 'block';
}
document.getElementById('btn-close1').onclick=function() {
    document.getElementById('invisible-box1').style.display = 'none';
    document.getElementById('btn-open1').style.display = 'block';
    document.getElementById('btn-close1').style.display = 'none';
}

document.getElementById('btn-open2').onclick=function() {
    document.getElementById('invisible-box2').style.display = 'block';
    document.getElementById('btn-open2').style.display = 'none';
    document.getElementById('btn-close2').style.display = 'block';
}
document.getElementById('btn-close2').onclick=function() {
    document.getElementById('invisible-box2').style.display = 'none';
    document.getElementById('btn-open2').style.display = 'block';
    document.getElementById('btn-close2').style.display = 'none';
}

document.getElementById('btn-open3').onclick=function() {
    document.getElementById('invisible-box3').style.display = 'block';
    document.getElementById('btn-open3').style.display = 'none';
    document.getElementById('btn-close3').style.display = 'block';
}
document.getElementById('btn-close3').onclick=function() {
    document.getElementById('invisible-box3').style.display = 'none';
    document.getElementById('btn-open3').style.display = 'block';
    document.getElementById('btn-close3').style.display = 'none';
}

document.getElementById('btn-open4').onclick=function() {
    document.getElementById('invisible-box4').style.display = 'block';
    document.getElementById('btn-open4').style.display = 'none';
    document.getElementById('btn-close4').style.display = 'block';
}
document.getElementById('btn-close4').onclick=function() {
    document.getElementById('invisible-box4').style.display = 'none';
    document.getElementById('btn-open4').style.display = 'block';
    document.getElementById('btn-close4').style.display = 'none';
}

document.getElementById('btn-open5').onclick=function() {
    document.getElementById('invisible-box5').style.display = 'block';
    document.getElementById('btn-open5').style.display = 'none';
    document.getElementById('btn-close5').style.display = 'block';
}
document.getElementById('btn-close5').onclick=function() {
    document.getElementById('invisible-box5').style.display = 'none';
    document.getElementById('btn-open5').style.display = 'block';
    document.getElementById('btn-close5').style.display = 'none';
}

document.getElementById('btn-open6').onclick=function() {
    document.getElementById('invisible-box6').style.display = 'block';
    document.getElementById('btn-open6').style.display = 'none';
    document.getElementById('btn-close6').style.display = 'block';
}
document.getElementById('btn-close6').onclick=function() {
    document.getElementById('invisible-box6').style.display = 'none';
    document.getElementById('btn-open6').style.display = 'block';
    document.getElementById('btn-close6').style.display = 'none';
}

document.getElementById('btn-open7').onclick=function() {
    document.getElementById('invisible-box7').style.display = 'block';
    document.getElementById('btn-open7').style.display = 'none';
    document.getElementById('btn-close7').style.display = 'block';
}
document.getElementById('btn-close7').onclick=function() {
    document.getElementById('invisible-box7').style.display = 'none';
    document.getElementById('btn-open7').style.display = 'block';
    document.getElementById('btn-close7').style.display = 'none';
}



//Появление  при скроллинге
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
  let elements = document.querySelectorAll('.docs');
  
  for (let elm of elements) {
    observer.observe(elm);
  }