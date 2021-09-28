const btns = document.querySelectorAll(".filter-btns__item");
const select = document.getElementById('options');
const content = document.querySelectorAll('.filter-content img');

for (let btn of btns) {
   // btn.onclick = () => {
   //    console.log(this);
   // };
   // Нужно навесить обработчик клика на кнопки и получить доступ к содержимому их data-атрибутов, в зависимости от которого будер работать фильтрующаяя функция. Причем эта функция будет общей и для кнопок и для селекта. Доступ к дата-атрибуту через контекст this с использованием стрелочной функции не подойдет , т.к. мы получим доступ к глобальному контексту window(внешнему), а нам нужен доступ к атрибутам внутри элемента. Поэтому будем использовать обычную функцию.
   btn.onclick = function() {
         filterImages(this.dataset.filter);
      };
}

function filterImages(sel) {
   for (let img of content) {
      img.style.display = "none";
      if (img.classList.contains(sel)) {
         img.style.display = "block";
      };
   };

   for (let btn of btns) {
      if (btn.dataset.filter === sel) {
         btn.classList.add('active');
      } else {
         btn.classList.remove('active');
      };
   };
   
   select.value = sel;
};
// функция, запускающаяся по клику на кнопку будет обходить коллекцию изображений и проверять есть ли у изображения конкретный класс. У classList есть свойство contains, которое принимает конккретный класс и возвращает либо trye либо fals, в зависимости от того есть ли этот класс у элемента. Так же нужно перебрать все кнопки, для них тоже запустить проверку: убрать активный класс если нет класса соответствующего полученному sel, в противном случае активный класс добавить.

select.addEventListener("change", () => {
   filterImages(select.value);
});

// для моб версии нужно навесить сдушатель с событием change на celect. событие chenge для select срабатывает при изменении его value(Событие change срабатывает по окончании изменения элемента.Для текстовых <input> это означает, что событие происходит при потере фокуса.Пока мы печатаем в текстовом поле в примере ниже, событие не происходит. Но когда мы перемещаем фокус в другое место, например, нажимая на кнопку, то произойдёт событие change.Для других элементов: select, input type=checkbox/radio событие запускается сразу после изменения значения).