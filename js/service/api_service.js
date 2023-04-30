const API_URL = 'https://maze-bevel-sidecar.glitch.me';  // на glitch сервер задеплоили


// получение категорий с сервера:
export const fecthCategories = async () => {

      try{
            // fetch() функция встроенная в браузер
           const response = await fetch(`${API_URL}/api/category`);  // await ждем ответа сервера
           
           if(response.status === 200 || response.status === 201){
                  const categories = await response.json();  // превращаем в объект/массив объектов
                  return categories;
           }
           else{
                  const error = response.json();  
                  throw error;  // после этого перейдем в блок catch
           }
      }
      catch(error){
            return { error };  // возврщаем ввиде еобъекта
      }
};




// получение категории  по ее id с сервера:
export const fetchCards = async (id) => {

      try{
            // ответ от сервера {"title":"Косвенные местоимения","pairs":[["me","меня; мне"],["you","тебя; тебе"],["him","его; ему"],["her","её; ей"],["it","его; ему"],["us","нас; нам"],["them","их; им"]],"id":"bc2iv1cwi6ht"}
           const response = await fetch(`${API_URL}/api/category/${id}`);  // await ждем ответа сервера
           
           if(response.status === 200 || response.status === 201){
                  const cards = await response.json();  // превращаем в объект/массив объектов
                  return cards;
           }
           else{
                  const error = response.json();  
                  throw error;  
           }
      }
      catch(error){
            return { error };  
      }
};
