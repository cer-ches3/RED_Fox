//Скролл до начала страницы
document.getElementById('arrow-slide-up').onclick=function(){
  document.getElementById('specialButton').scrollIntoView({behavior: "smooth"})
}



//Появление Карточек специалистов при скроллинге
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
  let elements = document.querySelectorAll('.card');
  
  for (let elm of elements) {
    observer.observe(elm);
  }