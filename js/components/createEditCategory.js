// отрисовка таблички категории:
import { createElement } from "../helper/createElement.js";

const TITLE = 'введите название категории';

export const createEditCategory  = (app) => {   // app- родитель
      
      const editCategory = createElement('section', { className: 'edit section-offset'});
      const container = createElement('div', { className: 'container edit__container'});
      const title = createElement('h2', { className: 'edit__title', title: 'Можно редактровать', contentEditable: true});
      const table = createElement('table', { className:'edit__table table'});
      const thead = createElement('thead');
      const trThead = createElement('tr');

      const tableHeadCellMain = createElement('th', {className: 'table__cell', textContent: 'main'});
      const tableHeadCellSecond = createElement('th', {className: 'table__cell', textContent: 'second'});
      const tableHeadCellEmpty = createElement('th', {className: 'table__cell', textContent: ''});

      const tbody = createElement('tbody');


      const btnWrapper = createElement('div', {className: 'edit__btn-wrapper'});
      const btnAddRow  = createElement('button', {className: 'edit__btn edit__add-row', textContent: 'Добавить пару'});
      const btnSave = createElement('button', {className: 'edit__btn edit__save', textContent: 'Сохранить категорию'});
      //btnSave.dataset.id = ;
      const btnCancel = createElement('button', {className: 'edit__btn edit__cancel', textContent: 'Отмена'});
      btnWrapper.append(btnAddRow, btnSave, btnCancel);  //  порядок добавления элементов важен
      


      thead.append(trThead);
      table.append(thead, tbody);
      trThead.append(tableHeadCellMain, tableHeadCellSecond, tableHeadCellEmpty);
      editCategory.append(container);
      container.append(title, table, btnWrapper);

      // создает строку таблицы: 
      const createTrCell = (dataArr) => {  //  /api/category/{id}  dataArr =  ["me","меня; мне"]
      
          const tr = createElement('tr');
          const tableCellMain = createElement('td', {className: 'table__cell table__cell_one', contenteditable:'true', textContent: dataArr[0]});
          const tableCellSecond = createElement('td', {className: 'table__cell table__cell_two', contenteditable:'true', textContent: dataArr[1]});
          const tableCellDel = createElement('td', {className: 'table__cell table__cell_two', contenteditable:'true'});
          const delRow = createElement('button', {className: 'table__del', textContent:'x'});
          

          delRow.addEventListener('click', () => {
            if(confirm('вы уверены что хоnите удалить?')){  //фцкнция confirm() встроена в браузер, если нажмем на Ок то уалится элемент
              tr.remove();      // удаляем элемент
            }
          });

          tableCellDel.append(delRow);
          tr.append(tableCellMain, tableCellSecond, tableCellDel); // порядок добавления важен

          return tr; // <tr>...</tr>
        };
       


        const clearTitle = () => {
          if(title.textContent === TITLE){
            title.textContent = '';
          }
        };


        const checkTitle = () => {
          if(title.textContent === ''){
            title.textContent = TITLE;
          }
        };


        title.addEventListener('focus', clearTitle);  // когда фокус навели, скобики  у функции clearTitle  не указываем , иначе сразу вызовется
        title.addEventListener('blur', checkTitle);   // когда фокус сняли

        btnAddRow.addEventListener('click', () => { // кнопка Добавить пару
          const emptyRow = createTrCell(['', '']);  
          tbody.append(emptyRow);
        });



       // data то, что придет с запроса /api/category/{id} :
      const mount = (data = { title: TITLE, pairs: [] }) => {  // если ничего не передадим, то передастся знач  data по умолчанию , pairs пустой так как таблицу будем ноавую создавать
            tbody.textContent = ''; // очищаем таблицу
            title.textContent = data.title;

            if(title.textContent = TITLE){
              title.classList.add('edit__title_change');
            }
            else{
              title.classList.remove('edit__title_change');
            }

            // "pairs":[["me","меня; мне"],["you","тебя; тебе"],["him","его; ему"],["her","её; ей"],["it","его; ему"],["us","нас; нам"],["them","их; им"]]]
            const rows = data.pairs.map(createTrCell);  // map переберет массив и вернет новый rows = [tr, tr, tr, tr]
            tbody.append(...rows);  // ...rows=  <tr>...</tr> <tr>...</tr> <tr>...</tr> <tr>...</tr>

            app.append(editCategory);
      };


      const unmount = () => {
        editCategory.remove(); // удаляем секцию
      };



      return { unmount, mount };
};





