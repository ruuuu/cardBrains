// отрисовка карточки категории:
import { createElement } from "../helper/createElement.js";
import { declOfNum } from "../helper/declOfNum.js";

export const createCategory = (app) => {  //app-родиель

      const category =  createElement('section', 
      {
            className: 'category section-offset'
      });


      const container =  createElement('div', 
      {
            className: 'container'
      });


      const categoryList =  createElement('ul', 
      {
            className: 'category__list'
      });

      

      const createCategoryCard = (data) => {   // категория с сервера  data = {id. title, length}
            const item = createElement('li', { className: 'category__item'});

            item.dataset.id = data.id;  // создание атрибута data-id
           
            // написать добавление др элементов:

            const categoryCardBtn = createElement('button', {className: 'category__card'});
            const categoryTitle = createElement('span', { className: 'category__title', textContent: data.title });
            const categoryPairs = createElement('span', { className: 'category__pairs', textContent: declOfNum(data.length, [ 'пара', 'пары', 'пар'])}); 
            const categoryEditBtn = createElement('button', { className: 'category__btn category__edit', ariaLabel : 'редактировать' });
            const categoryDelBtn = createElement('button', { className: 'category__btn category__del', ariaLabel : 'удалить' });

            categoryCardBtn.append(categoryTitle, categoryPairs);
            item.append(categoryCardBtn, categoryEditBtn, categoryDelBtn); // порядок добавления важен!
            
            return item;  // <li></li>
      };
     

      container.append(categoryList);

      // добавляем карточки-категории в ul-categoryList:
      const mount = (data) => {  // data = [{}, {}, {}] - массив категорий с сервера
            categoryList.textContent = '';    // очищаем секцию     
            app.append(category); // добавляем элемент category в конец app 
            
            const cards = data.map(createCategoryCard);  // перебираем массив: на каждой итерации вызовется функция createCategoryCard,  в итоге получим новый массив [ <li></li>, <li></li>, <li></li>å]
            categoryList.append(...cards);
      };


      const unmount = () => {  // убираем блок section с категриями
            category.remove();  // удаляем элемент <section> 
      };

      category.append(container);
     
      return { mount, unmount, categoryList };   // возвращаем объект!

};


