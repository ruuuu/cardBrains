import { createElement } from "../helper/createElement.js";
import { showAlert } from "./showAlert.js";
import { shuffleArray } from "./shuffle.js";


// отрисовка болшой карточки:
export const createPairs = (app) => {

      const pairs = createElement('section', {
            className: 'card section-offset',
      });

      const container = createElement('div', {
            className: 'container card__container',
      });

      const buttonReturn = createElement('button', {
            className: 'card__return',
            ariaLabel: 'Возврат к категориям',  // атрибут aria-label нужен для доступности(ттк у кнопки нет надписи)
      });

      const buttonCard = createElement('button', {  // картчоку сделали кнопкой, тк при на;атии на нее должен выполнится js-код, а недействие  в браузере
            className: 'card__item',
      });

      const front = createElement('span', {
            className: 'card__front',
            textContent: 'улыбка',
      });


      const back = createElement('span', {
            className: 'card__back',
            textContent: 'smile',
      });


      pairs.append(container);
      container.append(buttonReturn, buttonCard);
      buttonCard.append(front, back);

      // переворот карточки:
      const cardController = (data) => { // data = [["me","меня; мне"], ["you","тебя; тебе"], ["him","его; ему"], ["her","её; ей"], ["it","его; ему"]]
            let index = 0;
            
           front.textContent = data[index][0];
           back.textContent = data[index][1];

           const flipCard = () => {
                  buttonCard.classList.add('card__item_flipped');  //  картчока станет желтого цвета
                  buttonCard.removeEventListener('click', flipCard);  // снимаем событие
                  setTimeout(() => {
                        buttonCard.classList.remove('card__item_flipped');
                        setTimeout(() => {
                              index++;
                              if(index === data.length){
                                    front.textContent  = 'Закончили';
                                    showAlert('back to start'); 
                                    setTimeout(() => {
                                          buttonReturn.click();  // браузер сам жмет на кноку buttonReturn!!!
                                    }, 2000);
                                    return
                              }
                            
                              front.textContent = data[index][0]; 
                              back.textContent = data[index][1];
                              setTimeout(() => {
                                    buttonCard.addEventListener('click', flipCard);
                              }, 200);
                        }, 100);
                  }, 2000); // через 2с(2000мс) запустится переданная фукнция
           };

           buttonCard.addEventListener('click', flipCard);  // при нажатии на картчоку-слово, вызовется фукнция flipCard
      }


     
      

      const mount = (data) => { 
            app.append(pairs);  // отрисовка картчоки слова
            const newMas = shuffleArray(data.pairs)
            //             data.pairs
            cardController(newMas);   //  переворот карточки-слово
      }


      const unmount = () => {
            pairs.remove();
      }

      return  { buttonReturn, mount, unmount };
};



//  <section class="card section-offset">
//    <div class="container card__container">
      //   <button class="card__return" aria-label="Возврат к категориям"></button>
      //   <button class="card__item">
      //     <span class="card__front">улыбка</span>
      //     <span class="card__back">smile</span>
      //   </button>
//    </div> 
//</section> 