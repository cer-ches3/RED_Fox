//Скролл до начала страницы
document.getElementById('arrow-slide-up').onclick=function(){
    document.getElementById('specialButton').scrollIntoView({behavior: "smooth"})
 }
 


//Контроль заполненности полей
document.getElementById("submit").onclick=function(){
    if (document.getElementById("fio").value===""){
        alert("Вы не заполнили поле ФИО")
    } else if (document.getElementById("phone").value===""){
        alert("Вы не заполнили поле Телефон")
    } else if (document.getElementById("mail").value===""){
        alert("Вы не заполнили поле E-mail")
    } else if (document.getElementById("theme").value===""){
        alert("Вы не заполнили поле Тема")
    } else if (document.getElementById("message").value===""){
        alert("Вы не заполнили поле Сообщение")
    } else if (checkbox.checked){
        alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время")
        e.target.reset();
    }else {
        alert("Вы не дали согласие на обработку персональный данных")
    }
}

