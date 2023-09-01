/*

Получить гелокацию пользователя через Geolocation.getCurrentPosition() (WEB API) и по координатам
определить город отправив запрос на https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=00&longitude=00

*/

function getMyGeolocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      resolve({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      reject(new Error('Your geolocation is unavailable!'));
    });
  });
}

// console.log(getMyGeolocation().then(response => console.log(response)))

async function getCity() {
  try {
    const { latitude, longitude } = await getMyGeolocation();
    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data.city);
  } catch(error) {
    console.error(error);
  }
}

// getCity();







// Последовательное выполение запросов

const asyncArrow = async () => {
  try {
    const request = await fetch('https://dummyjson.com/products');
    const data = await request.json(); 
    return data;
  } catch(error) {
    console.error(error);
    throw error; // для проброски ошибки дальше по стеку выполения, если нужно дальше ее отрабатывать например
  }
};

console.log(1);
asyncArrow()
  .then((data) => { 
    // console.log(data);
    console.log(2.1) // для выполнения последовательно console.log(1) => asyncArrow => 2, перемешаем console.log(2) после вывода asyncArrow
  })
  .catch(error => console.error(error)) // ошибка будет прокидываться из функции
  .finally(() => console.log(2.2)); //либо console.log(2) выводим через finally
// console.log(2);
 
// Но это не очень хорошая практика, правильно использовать 

(async () => {
  // console.log(1);
  const result = await asyncArrow();
  // console.log(result);
  // console.log(2);
})()






// Параллельное выполение запросов

async function getAllProducts() {
  const response = await fetch('https://dummyjson.com/products');
  return response.json();
}

async function getProductById(id) {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
   return response.json(); 
}

async function getProductError(id) {
    const response = await fetch(`https://dummyjsons.com/products/${id}`);
   return response.json(); 
}

async function main() {
  const { products } = await getAllProducts();
  // для получения 30 продуктов мы можем сделать цикл, но запросы у нас пойдут последовательно,
  //   не очень хорошо с точки зврения времени получения
  for (const product of products) {
    const res = await getProductById(product.id);
    console.log(res);
  }
  /*
  
  Promisse.all([]) принимает массив промисов и запускает праллельно, вернет массив отработанных элементов
  или отказ если хоть один откажет

  */

  const res = await Promise.all(products.map((product) => getProductById(product.id)));
  console.log(res);
}

// main()


// Другие комбинации Promise
async function download() {
  
  const res1 = await Promise.all([
    getProductById(1),
    getProductById(2),
  ]);
  console.log('all', res1)

  /*
  
  Promisse.allSettled([]) принимает массив промисов и запускает праллельно, вернет массив объектов с 
  ключами: status, value, даже если хоть один откажет

  */

  const res2 = await Promise.allSettled([
    getProductById(1),
    getProductById(3),
    getProductError(2),
  ])
  const rejectedProducts = res2.filter((product) => product.status === "rejected");
  console.log('allSettledRejected', rejectedProducts)

  /*
  
  Promisse.race([]) принимает массив промисов и запускает праллельно, вернет первый любой не зависимо
  каким он будет выполенным или нет

  */

  const res3 = await Promise.race([
    getProductById(1),
    getProductById(3),
    // getProductError(2),
  ]);
  console.log('race', res3)
}

download();


// сделать генератор трех идей от скуки https://www.boredapi.com/api/activity

const body = document.querySelector('body');

const container = document.createElement('div');
container.style.width = '100vw';
container.style.height = '100vh';
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';

const cardContainer = document.createElement('div');
cardContainer.style.width = '90vw';
cardContainer.style.height = '75vh';
cardContainer.style.display = 'flex';
cardContainer.style.alignItems = 'center';
cardContainer.style.justifyContent = 'center';
cardContainer.style.gap = '5vw';
cardContainer.style.border = 'solid 1px grey';

const changeButtorn = document.createElement('button');
changeButtorn.setAttribute('type', 'button');
changeButtorn.style.height = '40px';
changeButtorn.style.marginTop = '24px';
changeButtorn.textContent = 'Изменить идеи';

body.prepend(container);
container.prepend(cardContainer);
container.append(changeButtorn);

for (let i = 0; i < 3; i++) {
  const card = document.createElement('div');
  card.id = `card${i}`;
  card.className = `container__card${i}`;
  card.style.height = '50vh';
  card.style.width = '25vw'
  card.style.border = 'solid 1px blue'
  card.style.display = 'flex'
  card.style.alignItems = 'center'
  card.style.justifyContent = 'center'
  card.style.textAlign = 'center'
  card.textContent ='пока идей нет';
  cardContainer.prepend(card);
};

changeButtorn.addEventListener('click', async () => {

  const response = await Promise.all([
    getIdea(),
    getIdea(),
    getIdea(),
  ])
  response.map((idea, index) => {
    const card = document.querySelector(`#card${index}`);
    card.textContent = idea;
  })
});

async function getIdea() {
  const responseIdea = await fetch('https://www.boredapi.com/api/activity');
  try {
    if (!responseIdea.ok) {
      throw new Error('Something wrong!');
    }
    const { activity } = await responseIdea.json();
    return activity;
  } catch(e) {
    console.error(e);
  } finally {
    if (!responseIdea.ok) {
      getIdea();
    }
  }
}