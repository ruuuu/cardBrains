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

      // создает строку: 
      const createTrCell = (dataArr) => {  //  /api/category/{id}  dataArr =  "pairs":[["me","меня; мне"],["you","тебя; тебе"],["him","его; ему"],["her","её; ей"],["it","его; ему"],["us","нас; нам"],["them","их; им"]]
       // dataArr.forEach((item, i) => {
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
          tr.append(tableCellMain, tableCellSecond, tableCellDel);

          return tr; // <tr>...</tr>
        }
        //);


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

  
    //  data = /api/category/{id}  // [title: "kdkld", "pairs":[["me","меня; мне"],["you","тебя; тебе"],["him","его; ему"],["her","её; ей"],["it","его; ему"],["us","нас; нам"],["them","их; им"]]]

      const unmount = () => {

      };

      const mount = () => {
            
      };


      return { unmount, mount };
};





{/* <section class="edit section-offset">
<div class="container edit__container">
  <h2 class="edit__title" contenteditable="true" title="Можно редактировать">Семья</h2>
  <table class="edit__table table">
    <thead>
      <tr>
        <th class="table__cell">main</th>
        <th class="table__cell">second</th>
        <th class="table__cell"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="table__cell table__cell_one" contenteditable="true">брат</td>
        <td class="table__cell table__cell_two" contenteditable="true">brother</td>
        <td class="table__cell"><button class="table__del">x</button></td>
      </tr>
      <tr>
        <td class="table__cell table__cell_one" contenteditable="true">ребенок</td>
        <td class="table__cell table__cell_two" contenteditable="true">child</td>
        <td class="table__cell"><button class="table__del">x</button></td>
      </tr>
      <tr>
        <td class="table__cell table__cell_one" contenteditable="true">дети</td>
        <td class="table__cell table__cell_two" contenteditable="true">children</td>
        <td class="table__cell"><button class="table__del">x</button></td>
      </tr>
      <tr>
        <td class="table__cell table__cell_one" contenteditable="true">двоюродный брат или сестра</td>
        <td class="table__cell table__cell_two" contenteditable="true">cousin</td>
        <td class="table__cell"><button class="table__del">x</button></td>
      </tr>
      <tr>
        <td class="table__cell table__cell_one" contenteditable="true">дочь</td>
        <td class="table__cell table__cell_two" contenteditable="true">daughter</td>
        <td class="table__cell"><button class="table__del">x</button></td>
      </tr>
      <tr>
        <td class="table__cell table__cell_one" contenteditable="true">папа</td>
        <td class="table__cell table__cell_two" contenteditable="true">father</td>
        <td class="table__cell"><button class="table__del">x</button></td>
      </tr>
      <tr>
        <td class="table__cell table__cell_one" contenteditable="true">дедушка</td>
        <td class="table__cell table__cell_two" contenteditable="true">grandfather</td>
        <td class="table__cell"><button class="table__del">x</button></td>
      </tr>
      <tr>
        <td class="table__cell table__cell_one" contenteditable="true">бабушка</td>
        <td class="table__cell table__cell_two" contenteditable="true">grandmother</td>
        <td class="table__cell"><button class="table__del">x</button></td>
      </tr>
      <tr>
        <td class="table__cell table__cell_one" contenteditable="true">муж</td>
        <td class="table__cell table__cell_two" contenteditable="true">husband</td>
        <td class="table__cell"><button class="table__del">x</button></td>
      </tr>
      <tr>
        <td class="table__cell table__cell_one" contenteditable="true">мужчина</td>
        <td class="table__cell table__cell_two" contenteditable="true">man</td>
        <td class="table__cell"><button class="table__del">x</button></td>
      </tr>
      <tr>
        <td class="table__cell table__cell_one" contenteditable="true">мама</td>
        <td class="table__cell table__cell_two" contenteditable="true">mother</td>
        <td class="table__cell"><button class="table__del">x</button></td>
      </tr>
      <tr>
        <td class="table__cell table__cell_one" contenteditable="true">родители</td>
        <td class="table__cell table__cell_two" contenteditable="true">parents</td>
        <td class="table__cell"><button class="table__del">x</button></td>
      </tr>
      <tr>
        <td class="table__cell table__cell_one" contenteditable="true">сестра</td>
        <td class="table__cell table__cell_two" contenteditable="true">sister</td>
        <td class="table__cell"><button class="table__del">x</button></td>
      </tr>
      <tr>
        <td class="table__cell table__cell_one" contenteditable="true">сын</td>
        <td class="table__cell table__cell_two" contenteditable="true">son</td>
        <td class="table__cell"><button class="table__del">x</button></td>
      </tr>
      <tr>
        <td class="table__cell table__cell_one" contenteditable="true">тинейджер</td>
        <td class="table__cell table__cell_two" contenteditable="true">teenager</td>
        <td class="table__cell"><button class="table__del">x</button></td>
      </tr>
      <tr>
        <td class="table__cell table__cell_one" contenteditable="true">дядя</td>
        <td class="table__cell table__cell_two" contenteditable="true">uncle</td>
        <td class="table__cell"><button class="table__del">x</button></td>
      </tr>
      <tr>
        <td class="table__cell table__cell_one" contenteditable="true">жена</td>
        <td class="table__cell table__cell_two" contenteditable="true">wife</td>
        <td class="table__cell"><button class="table__del">x</button></td>
      </tr>
      <tr>
        <td class="table__cell table__cell_one" contenteditable="true">женщина</td>
        <td class="table__cell table__cell_two" contenteditable="true">woman</td>
        <td class="table__cell"><button class="table__del">x</button></td>
      </tr>
      <tr>
        <td class="table__cell table__cell_one" contenteditable="true">старший</td>
        <td class="table__cell table__cell_two" contenteditable="true">older</td>
        <td class="table__cell"><button class="table__del">x</button></td>
      </tr>
      <tr>
        <td class="table__cell table__cell_one" contenteditable="true">младший</td>
        <td class="table__cell table__cell_two" contenteditable="true">younger</td>
        <td class="table__cell"><button class="table__del">x</button></td>
      </tr>
      <tr>
        <td class="table__cell table__cell_one" contenteditable="true"></td>
        <td class="table__cell table__cell_two" contenteditable="true"></td>
        <td class="table__cell"><button class="table__del">x</button></td>
      </tr>
    </tbody>
  </table>
  <div class="edit__btn-wrapper">
    <button class="edit__btn edit__add-row">Добавить пару</button>
    <button class="edit__btn edit__save" data-id="bczp358gktzy">Сохранить категорию</button>
    <button class="edit__btn edit__cancel">Отмена</button>
  </div>
</div>
</section> */}