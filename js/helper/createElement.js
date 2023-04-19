export const createElement = (tag, attr) => {  // attr = { className, textContent, alt, src, href  }

      const element = document.createElement(tag);  // любой элемент на странице эт объект
      Object.assign(element, attr);  // Добавляет/заменяет элементу element свойства указанные в attr

      return element;  // <tag {attr}>

};