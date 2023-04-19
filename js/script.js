import { createCategory } from "./components/createCategory.js";
import { createHrader } from "./components/createHeader.js";
import { createElement } from "./helper/createElement.js";
import { fecthCategories } from "./service/api_service.js";



const initApp = async () => {  // ставим async тк в фукнции есть  await fecthCategories()

      //  любой элемент на станице эт объект(а занчит у него есть свои свойтсва и методы)
      const headerParent =  document.querySelector('.header');  // любой элемент на станице это объект
      const app =  document.querySelector('#app');  // объект <main></main>


      const headerObj = createHrader(headerParent);
      console.log('headerObj ', headerObj);   // { headerLogolink: a.header__logo-link, headerBtn: button.header__btn, updateHeaderTitle: ƒ }
     

      const categoryObj = createCategory(app);
      console.log('categoryObj ', categoryObj); 


      const categories = await fecthCategories();  // без await получим промис, поэтмоу ставим либо await, либо .then(). [{},{},{},{}]
      console.log('categorus ', categories);
      if(categories.error){
            const errorElem = createElement('p', { className: 'server-error', textContent: 'Ошибка сервера'});
            app.append(errorElem);
            return;  // функция прервется
      }

     
      //createCategory('app', categories);
      

      const returnIndex = (evt) => {
            evt.preventDefault();
            headerObj.updateHeaderTitle('Руфина');
      };

      
      headerObj.headerLogolink.addEventListener('click', returnIndex); // при клике вызовется фукнция  returnIndex
      

      headerObj.headerBtn.addEventListener('click', () => { // кнопка Добавить категорию
            headerObj.updateHeaderTitle('Новая категория');
      })
};

initApp();