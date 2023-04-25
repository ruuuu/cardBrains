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


      
      thead.append(trThead);
      table.append(thead);
      editCategory.append(container);
      container.append(title, table);



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