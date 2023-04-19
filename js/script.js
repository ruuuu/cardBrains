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
      console.log('categoryObj ', categoryObj); // { categoryLiat, mount, unmount }


     

      const renderIndex = async(evt) => {
            evt?.preventDefault();  // если есть evt, то метод preventDefault()  вызовется

            const categories = await fecthCategories();  // без await получим промис, поэтмоу ставим либо await, либо .then(). [{},{},{},{}]
            console.log('categorus ', categories);
            if(categories.error){
                  const errorElem = createElement('p', { className: 'server-error', textContent: 'Ошибка сервера'});
                  app.append(errorElem);
                  return;  // функция прервется
            }
      
           
            categoryObj.mount(categories); // заполняем  список ателгрий категориями
      };

      renderIndex();  // для инициализации вызываем

      headerObj.headerLogolink.addEventListener('click', renderIndex); // при клике вызовется фукнция  returnIndex
      

      headerObj.headerBtn.addEventListener('click', () => { // кнопка Добавить категорию
            categoryObj.unmount(); // удаляем спсик категрий
            headerObj.updateHeaderTitle('Новая категория');
      })
};

initApp();