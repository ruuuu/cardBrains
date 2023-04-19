const API_URL = 'https://maze-bevel-sidecar.glitch.me';


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

