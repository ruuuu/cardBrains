import { createCategory } from "./components/createCategory.js";
import { createHrader } from "./components/createHeader.js";
import { createElement } from "./helper/createElement.js";
import { fecthCategories, fetchCards } from "./service/api_service.js";
import { createEditCategory } from "./components/createEditCategory.js";
import { createPairs } from "./components/createPairs.js";



const initApp = async () => {  // ставим async тк в фукнции есть  await fecthCategories()

      //  любой элемент на станице эт объект(а занчит у него есть свои свойтсва и методы)
      const headerParent =  document.querySelector('.header');  // любой элемент на станице это объект,  а значи у него есть свойства методы(console.dir())
      const app =  document.querySelector('#app');  // объект <main></main>


      const headerObj = createHrader(headerParent);
      console.log('headerObj ', headerObj);   // { headerLogolink: a.header__logo-link, headerBtn: button.header__btn, updateHeaderTitle: ƒ }
     

      const categoryObj = createCategory(app);
      console.log('categoryObj ', categoryObj); // {  mount, unmount, categoryList }

      const editCategoryObj = createEditCategory(app);
      console.log('editCategoryObj  ', editCategoryObj); // { unmount, mount  }

      const pairsObj = createPairs(app);
      console.log('pairsObj ', pairsObj);



      // очищение категорий :
      const allSectionUnmount = () => {
            // либо сразу так:
            // [ categoryObj, editCategoryObj ].forEach((obj) => {
            //       obj.unmount();
            // });
            // либо по отдельности:
            categoryObj.unmount();   // очищаем категории
            editCategoryObj.unmount(); // очистка секции таблцы
            pairsObj.unmount();
      };
     

      // отрисовка начальной страницы с картчоками категорий:
      const renderIndex = async(evt) => {
            evt?.preventDefault();  // если есть evt, то метод preventDefault() вызовется
            allSectionUnmount();
            headerObj.updateHeaderTitle('Категории');
            
            const categories = await fecthCategories();  // без await получим промис, поэтмоу ставим либо await, либо .then(). [{},{},{},{}]
            console.log('categories ', categories);
            
            if(categories.error){
                  const errorElem = createElement('p', { className: 'server-error', textContent: 'Ошибка сервера'});
                  app.append(errorElem);
                  return;  // функция прервется
            }
      
           
            categoryObj.mount(categories); // заполняем  список картчоек категорий категориями
      };

      renderIndex();  // для инициализации вызываем


      headerObj.headerLogolink.addEventListener('click', renderIndex); // при клике на лого, вызовется фукнция  renderIndex
      

      headerObj.headerBtn.addEventListener('click', () => { // кнопка Добавить категорию
            allSectionUnmount(); 
            headerObj.updateHeaderTitle('Новая категория');
            editCategoryObj.mount(); // отображаем пустую таблицу новой категории
      });


      //   обработчик нажатия на картчоку и ее кнопок.  Либо передаем (evt), либо так { target} 
      categoryObj.categoryList.addEventListener('click', async(evt) => {  // навешеиваме обработчик не на каждую кнпоку редаткрования картчоки категории, а на их родителя(categoryList)-это делегирование
            const target = evt.target;  //  элемент на котрый нажали
            const categoryItem = target.closest('.category__item');  // есть ли  элемента его родителя класса category__item. Если  есть такой элемент, то вернет его. Иначе null

            if(target.closest('.category__edit')){          // если нажали на иконку Карандаша на карточке категрии
                  const dataCards = await fetchCards(categoryItem.dataset.id);                   // await нужен, иначе промис получим, ответ от сервера: { "title":"Косвенные местоимения",  "pairs":[["me","меня; мне"],["you","тебя; тебе"],["him","его; ему"],["her","её; ей"],["it","его; ему"],["us","нас; нам"],["them","их; им"]],  "id":"bc2iv1cwi6ht" }
                  allSectionUnmount(); 
                  headerObj.updateHeaderTitle('Редактирование');  
                  editCategoryObj.mount(dataCards);  // рисуме таблицу выбранной категории   
                  return;  // дальше не будет выплняться код
            }


            if(target.closest('.category__del')){    //  если нажали на иконку Корзины на карточке категрии
                  return;
            }

            if(categoryItem){    // если нажали на картчоку категории
                  allSectionUnmount();  // все секции скрываем
                  const dataCards = await fetchCards(categoryItem.dataset.id);  // ответ от сервера { "title":"Косвенные местоимения",  "pairs": [["me","меня; мне"],["you","тебя; тебе"],["him","его; ему"],["her","её; ей"],["it","его; ему"],["us","нас; нам"],["them","их; им"]],  "id":"bc2iv1cwi6ht" }
                  headerObj.updateHeaderTitle(dataCards.title);
                  
                  pairsObj.mount(dataCards);
                  //editCategoryObj.mount(dataCards);  // рисуме таблицу выбранной категории   

            }   
      });

      pairsObj.buttonReturn.addEventListener('click', renderIndex);

};





initApp(); // отсюда все начинается!