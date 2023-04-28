import { createCategory } from "./components/createCategory.js";
import { createHrader } from "./components/createHeader.js";
import { createElement } from "./helper/createElement.js";
import { fecthCategories } from "./service/api_service.js";
import { createEditCategory } from "./components/createEditCategory.js";



const initApp = async () => {  // ставим async тк в фукнции есть  await fecthCategories()

      //  любой элемент на станице эт объект(а занчит у него есть свои свойтсва и методы)
      const headerParent =  document.querySelector('.header');  // любой элемент на станице это объект,  а значи у него есть свойства методы(console.dir())
      const app =  document.querySelector('#app');  // объект <main></main>


      const headerObj = createHrader(headerParent);
      console.log('headerObj ', headerObj);   // { headerLogolink: a.header__logo-link, headerBtn: button.header__btn, updateHeaderTitle: ƒ }
     

      const categoryObj = createCategory(app);
      console.log('categoryObj ', categoryObj); // { categoryList, mount, unmount }

      const editCategoryObj = createEditCategory(app);
      console.log('editCategoryObj  ', editCategoryObj); // { unmount, mount  }

      // очищение категорий :
      const allSectionUnmount = () => {
            // [ categoryObj, editCategoryObj ].forEach((obj) => {
            //       obj.unmount();
            // });
            categoryObj.unmount();   // очищаем категории
            editCategoryObj.unmount();
      };
     

      const renderIndex = async(evt) => {
            evt?.preventDefault();  // если есть evt, то метод preventDefault()  вызовется
            allSectionUnmount();
            
            const categories = await fecthCategories();  // без await получим промис, поэтмоу ставим либо await, либо .then(). [{},{},{},{}]
            console.log('categorus ', categories);
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
            editCategoryObj.mount();
      })
};

initApp(); // отсюда все начинается!