export const shuffleArray  = (arr) => {
      const array = [...arr];  // сделали копию массива(в новый массви кладем элементы старого массива). Если просто  наисать как array = arr 
      
      for(let i = array.length - 1; i > 0; i--){
            const j = Math.floor(Math.random()* (i + 1));
            [array[i], array[j]] = [array[j], array[i]];  // меняем местами переменные(это вариант без добалвения промежутчной переменной)
      }

      return array;
            

      // либо так:
      // const newMas = arr.sort(() => Math.random() - 0.5)

      // return newMas;

};