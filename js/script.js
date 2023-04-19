import { createHrader } from "./components/createHeader.js";
import { fecthCategories } from "./service/api_service.js";


const initApp = async () => {  // ставим async тк в фукнции есть  await fecthCategories()

      //  любой элемент на станице эт объект(а занчит у него есть свои свойтсва и методы)
      const headerParent =  document.querySelector('.header');  // любой элемент на станице это объект
      const app =  document.querySelector('#app');  // объект


      const headerObj = createHrader(headerParent);
      console.log('headerObj ', headerObj);   // { headerLogolink: a.header__logo-link, headerBtn: button.header__btn, updateHeaderTitle: ƒ }
     
      const categories = await fecthCategories();  // без await получим промис, поэтмоу ставим либо await, либо .then(). [{},{},{},{}]
      console.log('categorus ', categories)

      const returnIndex = (evt) => {
            evt.preventDefault();
            headerObj.updateHeaderTitle('Руфина');
      };

      
      headerObj.headerLogolink.addEventListener('click', returnIndex); // приклике вызоветс фукнция  returnIndex
      

      headerObj.headerBtn.addEventListener('click', () => {
            headerObj.updateHeaderTitle('Новая категория');
      })
};

initApp();