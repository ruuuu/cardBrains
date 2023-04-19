import { createElement } from "../helper/createElement.js";




export const createHrader = (parent) => {

      const container = createElement('div', {
            className: 'container header__container',

      });
     
      parent.append(container);

      const headerLogolink = createElement('a',{
            className: 'header__logo-link',
            href: '#'
      });


      const logo = createElement('img',{
            className: 'header__logo',
            src: 'img/logo.svg',
            alt: 'Логотип сервиса brain card'
      });


      const headerTitle = createElement('h2',{
            className: 'header__subtitle',
            textContent: 'Категории'
      });

      const headerBtn = createElement('button',{  // кнпока Добавить категорию
            className: 'header__btn',
            textContent: 'Добавить категорию'
      });

     
      headerLogolink.append(logo);
      container.append(headerLogolink, headerTitle, headerBtn);
     
      const updateHeaderTitle = (title) => {
            headerTitle.textContent = title;
      };

      //  возвращаем объект!:
      return { headerLogolink, headerBtn, updateHeaderTitle }; // ттк на эти жлементы потом будем вешать событие  и также возвращаем функцию
     

};

//const logo = new Image();
// logo.className = 'header__logo';
// logo.src= 'img/logo.svg';
// logo.alt = 'Логотип сервиса brain card';