// Действие при клике на кнопку "Записаться на курс" 
document.getElementById('button-UC').onclick=function() {
  document.getElementById('programms').scrollIntoView()
  document.getElementById('sign-box').style.display = 'block'
  document.getElementById('input-kurs').value = '0'
}



//Скролл до начала страницы
document.getElementById('arrow-slide-up').onclick=function(){
  document.getElementById('specialButton').scrollIntoView({behavior: "smooth"})
}


//Слайдер
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);
function nextSlide(){
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slide showing';
}
document.getElementById('btn-slides1').onclick=function() {
  document.getElementById('kursi').scrollIntoView({behavior: "smooth"})
}
document.getElementById('btn-slides2').onclick=function() {
  document.getElementById('kursi').scrollIntoView({behavior: "smooth"})
}
document.getElementById('btn-slides3').onclick=function() {
  document.getElementById('kursi').scrollIntoView({behavior: "smooth"})
}


//Появление Курсов при скроллинге
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
let elements = document.querySelectorAll('.kurs');

for (let elm of elements) {
  observer.observe(elm);
}


//Скроллинг до Программ обучения при нажатии на "Подробнее"
document.getElementById('btn-kurs1').onclick=function() {
  document.getElementById('programm1').scrollIntoView({behavior: "smooth"})
}
document.getElementById('btn-kurs2').onclick=function() {
  document.getElementById('programm2').scrollIntoView({behavior: "smooth"})
}
document.getElementById('btn-kurs3').onclick=function() {
  document.getElementById('programm3').scrollIntoView({behavior: "smooth"})
}
document.getElementById('btn-kurs4').onclick=function() {
  document.getElementById('programm4').scrollIntoView({behavior: "smooth"})
}
document.getElementById('btn-kurs5').onclick=function() {
  document.getElementById('programm5').scrollIntoView({behavior: "smooth"})
}
document.getElementById('btn-kurs6').onclick=function() {
  document.getElementById('programm6').scrollIntoView({behavior: "smooth"})
}
document.getElementById('btn-kurs7').onclick=function() {
  document.getElementById('programm7').scrollIntoView({behavior: "smooth"})
}
document.getElementById('btn-kurs8').onclick=function() {
  document.getElementById('programm8').scrollIntoView({behavior: "smooth"})
}
document.getElementById('btn-kurs9').onclick=function() {
  document.getElementById('programm9').scrollIntoView({behavior: "smooth"})
}
document.getElementById('btn-kurs10').onclick=function() {
  document.getElementById('programm10').scrollIntoView({behavior: "smooth"})
}


//Действие при нажатии на "Программа курса"
document.getElementById('button-prog1').onclick=function() {
  document.getElementById('invisible-prog1').style.display = 'block' 
  document.getElementById('button-prog1').style.display = 'none'
  document.getElementById('hide1').style.display = 'block'
}
document.getElementById('hide1').onclick=function() {
  document.getElementById('invisible-prog1').style.display = 'none' 
  document.getElementById('button-prog1').style.display = 'block'
  document.getElementById('hide1').style.display = 'none'
}

document.getElementById('button-prog2').onclick=function() {
  document.getElementById('invisible-prog2').style.display = 'block' 
  document.getElementById('button-prog2').style.display = 'none'
  document.getElementById('hide2').style.display = 'block'
}
document.getElementById('hide2').onclick=function() {
  document.getElementById('invisible-prog2').style.display = 'none' 
  document.getElementById('button-prog2').style.display = 'block'
  document.getElementById('hide2').style.display = 'none'
}

document.getElementById('button-prog3').onclick=function() {
  document.getElementById('invisible-prog3').style.display = 'block' 
  document.getElementById('button-prog3').style.display = 'none'
  document.getElementById('hide3').style.display = 'block'
}
document.getElementById('hide3').onclick=function() {
  document.getElementById('invisible-prog3').style.display = 'none' 
  document.getElementById('button-prog3').style.display = 'block'
  document.getElementById('hide3').style.display = 'none'
}

document.getElementById('button-prog4').onclick=function() {
  document.getElementById('invisible-prog4').style.display = 'block' 
  document.getElementById('button-prog4').style.display = 'none'
  document.getElementById('hide4').style.display = 'block'
}
document.getElementById('hide4').onclick=function() {
  document.getElementById('invisible-prog4').style.display = 'none' 
  document.getElementById('button-prog4').style.display = 'block'
  document.getElementById('hide4').style.display = 'none'
}

document.getElementById('button-prog5').onclick=function() {
  document.getElementById('invisible-prog5').style.display = 'block' 
  document.getElementById('button-prog5').style.display = 'none'
  document.getElementById('hide5').style.display = 'block'
}
document.getElementById('hide5').onclick=function() {
  document.getElementById('invisible-prog5').style.display = 'none' 
  document.getElementById('button-prog5').style.display = 'block'
  document.getElementById('hide5').style.display = 'none'
}

document.getElementById('button-prog6').onclick=function() {
  document.getElementById('invisible-prog6').style.display = 'block' 
  document.getElementById('button-prog6').style.display = 'none'
  document.getElementById('hide6').style.display = 'block'
}
document.getElementById('hide6').onclick=function() {
  document.getElementById('invisible-prog6').style.display = 'none' 
  document.getElementById('button-prog6').style.display = 'block'
  document.getElementById('hide6').style.display = 'none'
}

document.getElementById('button-prog7').onclick=function() {
  document.getElementById('invisible-prog7').style.display = 'block' 
  document.getElementById('button-prog7').style.display = 'none'
  document.getElementById('hide7').style.display = 'block'
}
document.getElementById('hide7').onclick=function() {
  document.getElementById('invisible-prog7').style.display = 'none' 
  document.getElementById('button-prog7').style.display = 'block'
  document.getElementById('hide7').style.display = 'none'
}

document.getElementById('button-prog8').onclick=function() {
  document.getElementById('invisible-prog8').style.display = 'block' 
  document.getElementById('button-prog8').style.display = 'none'
  document.getElementById('hide8').style.display = 'block'
}
document.getElementById('hide8').onclick=function() {
  document.getElementById('invisible-prog8').style.display = 'none' 
  document.getElementById('button-prog8').style.display = 'block'
  document.getElementById('hide8').style.display = 'none'
}

document.getElementById('button-prog9').onclick=function() {
  document.getElementById('invisible-prog9').style.display = 'block' 
  document.getElementById('button-prog9').style.display = 'none'
  document.getElementById('hide9').style.display = 'block'
}
document.getElementById('hide9').onclick=function() {
  document.getElementById('invisible-prog9').style.display = 'none' 
  document.getElementById('button-prog9').style.display = 'block'
  document.getElementById('hide9').style.display = 'none'
}

document.getElementById('button-prog10').onclick=function() {
  document.getElementById('invisible-prog10').style.display = 'block' 
  document.getElementById('button-prog10').style.display = 'none'
  document.getElementById('hide10').style.display = 'block'
}
document.getElementById('hide10').onclick=function() {
  document.getElementById('invisible-prog10').style.display = 'none' 
  document.getElementById('button-prog10').style.display = 'block'
  document.getElementById('hide10').style.display = 'none'
}


//Действие при нажатии на "Записаться"
document.getElementById('sign1').onclick=function() {
  document.getElementById('sign-box').style.display = 'block'
  document.getElementById('input-kurs').value = '1'
}
document.getElementById('sign2').onclick=function() {
  document.getElementById('sign-box').style.display = 'block'
  document.getElementById('input-kurs').value = '2'
}
document.getElementById('sign3').onclick=function() {
  document.getElementById('sign-box').style.display = 'block'
  document.getElementById('input-kurs').value = '3'
}
document.getElementById('sign4').onclick=function() {
  document.getElementById('sign-box').style.display = 'block'
  document.getElementById('input-kurs').value = '4'
}
document.getElementById('sign5').onclick=function() {
  document.getElementById('sign-box').style.display = 'block'
  document.getElementById('input-kurs').value = '5'
}
document.getElementById('sign6').onclick=function() {
  document.getElementById('sign-box').style.display = 'block'
  document.getElementById('input-kurs').value = '6'
}
document.getElementById('sign7').onclick=function() {
  document.getElementById('sign-box').style.display = 'block'
  document.getElementById('input-kurs').value = '7'
}
document.getElementById('sign8').onclick=function() {
  document.getElementById('sign-box').style.display = 'block'
  document.getElementById('input-kurs').value = '8'
}
document.getElementById('sign9').onclick=function() {
  document.getElementById('sign-box').style.display = 'block'
  document.getElementById('input-kurs').value = '9'
}
document.getElementById('sign10').onclick=function() {
  document.getElementById('sign-box').style.display = 'block'
  document.getElementById('input-kurs').value = '10'
}
document.getElementById('btn-close').onclick=function() {
  document.getElementById('sign-box').style.display = 'none'
}



//Контроль заполненности полей
document.getElementById("submit").onclick = function () {
  if (document.getElementById("fio").value === "") {
    alert("Вы не заполнили поле ФИО")
  } else if (document.getElementById("phone").value === "") {
    alert("Вы не заполнили поле Телефон")
  } else if (document.getElementById("mail").value === "") {
    alert("Вы не заполнили поле E-mail")
  } else if (document.getElementById("city").value === "") {
    alert("Вы не заполнили поле Город")
  } else if (document.getElementById("input-kurs").value === "0") {
    alert("Вы не выбрали тему курса")
  } else if (document.getElementById("input-form-education").value === "0") {
    alert("Вы не выбрали формат обучения")
  } else if (checkbox.checked) {
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время")
    e.target.reset();
  } else {
    alert("Вы не дали согласие на обработку персональный данных")
  }
}
