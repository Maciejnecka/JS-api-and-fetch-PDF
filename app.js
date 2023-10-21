'use strict';
// function getAsyncData(callback) {
//   const time = Math.random() * 5000;
//   const insideData = { name: 'secret', value: null };
//   setTimeout(function () {
//     callback(insideData);
//   }, time);
// }

// console.log('before');
// getAsyncData(function (data1) {
//   console.log('async 1', data1);
// });

// getAsyncData(function (data2) {
//   console.log('async 2', data2);
// });

// console.log('after');

// function getAsyncData(delay, callback) {
//   const time = Math.random() * 2000;
//   setTimeout(function () {
//     callback(time);
//   }, delay + time);
// }

// getAsyncData(0, function (delay1) {
//   getAsyncData(delay1, function (delay2) {
//     getAsyncData(delay2, function () {
//       console.log('Started all async fn');
//     });
//   });
// });

// function getAsyncData(delay, callback) {
//   const time = Math.random() * 2000;
//   setTimeout(function () {
//     callback(time);
//   }, delay + time);
// }

// getAsyncData(0, firstCallback);

// function firstCallback(delay1) {
//   getAsyncData(delay1, secondCallback);
//   console.log('first Cb');
// }

// function secondCallback(delay2) {
//   getAsyncData(delay2, thirdCallback);
//   console.log('second Cb');
// }

// function thirdCallback() {
//   console.log('started all async fn');
// }

// function getAsyncData(delay, callback) {
//   console.dir(callback);
//   const time = Math.random() * 2000;
//   setTimeout(function () {
//     callback(time);
//   }, delay + time);
// }

// getAsyncData(0, function cb1(delay1) {
//   getAsyncData(delay1, function cb2(delay2) {
//     getAsyncData(delay2, function cb3() {
//       console.log(delay1, delay2);
//     });
//   });
// });

// const a = 12,
//   b = 4;

// const promise = new Promise(function (resolve, reject) {
//   if (b !== 0) {
//     resolve(a / b);
//   } else {
//     reject('Nie dzielimy przez zero!');
//   }
// });

// promise.then(function (resp) {
//   console.log(resp);
// });

// promise.catch(function (err) {
//   console.log(err);
// });

// const promise = new Promise((resolve, reject) => {
//   const time = Math.random() * 1000;
//   const a = parseInt(Math.random() * 10);
//   const b = parseInt(Math.random() * 10);
//   setTimeout(() => {
//     if (b !== 0) {
//       resolve(a / b);
//     } else {
//       reject('Nie dzielimy przez zero!');
//     }
//   }, time);
// });

// promise.then((resp) => console.log(resp)).catch((err) => console.error(err));

// const getSumAsync = (a, b) => {
//   const promise = new Promise((resolve, reject) => {
//     const time = Math.random() * 1000;
//     setTimeout(() => {
//       if (b !== 0) {
//         resolve(a / b);
//       } else {
//         reject('Nie dzielimy przez zero!');
//       }
//     }, time);
//   });
//   return promise;
// };

// getSumAsync(4, 5)
//   .then((resp) => console.log(resp))
//   .catch((err) => console.error(err));

// getSumAsync(4, 0)
//   .then((resp) => console.log(resp))
//   .catch((err) => console.error(err));

// getSumAsync(4, 2)
//   .then((resp1) => getSumAsync(resp1, 4))
//   .then((resp2) => console.log(resp2))
//   .catch((err) => console.error(err));

// const getAsyncData = (a, b) => {
//   const promise = new Promise((resolve, reject) => {
//     const time = Math.random() * 1000;
//     setTimeout(() => {
//       if (b !== 0) {
//         resolve(a / b);
//       } else {
//         reject('Nie dzielimy przez zero!');
//       }
//     }, time);
//   });
//   return promise;
// };

// Promise.race([getAsyncData(4, 2), getAsyncData(9, 3)])
//   .then((values) => console.log(values))
//   .catch((err) => console.error(err));

// const promise = fetch('https:///api.ipify.org');

// promise
//   .then((resp) => resp.text())
//   .then((ip) => console.log(ip))
//   .catch((err) => console.error(err))
//   .finally(() => {
//     console.log('Odpytywanie API zakończone!');
//   });

// const promise = fetch('https://api.ipify.org');

// promise
//   .then((resp) => {
//     if (resp.ok) {
//       return resp.text();
//     }
//     return Promise.reject(resp);
//   })
//   .then((ip) => console.log(ip))
//   .catch((err) => console.error(err))
//   .finally(() => {
//     console.log('Odpytywanie API zakończone!');
//   });

// const promise = fetch('http://ip-api.com/csv/87.206.56.154');

// promise
//   .then((resp) => {
//     if (resp.ok) {
//       return resp.text();
//     }
//     return Promise.reject(resp);
//   })
//   .then((ip) => console.log(ip))
//   .catch((err) => console.error(err))
//   .finally(() => {
//     console.log('Odpytywanie API zakończone!');
//   });

// const promise = fetch('https://official-joke-api.appspot.com/jokes/16');

// promise
//   .then((resp) => {
//     if (resp.ok) {
//       return resp.json();
//     }
//     return Promise.reject(resp);
//   })
//   .then((joke) => console.log(joke))
//   .catch((err) => console.error(err))
//   .finally(() => {
//     console.log('Odpytywanie API zakończone!');
//   });

// const promise = fetch('https://jsonplaceholder.typicode.com/todos/1', {
//   method: 'GET',
// }); // domyślne ustawienie

// promise
//   .then((resp) => {
//     if (resp.ok) {
//       return resp.json();
//     }
//     return Promise.reject(resp);
//   })
//   .then((ip) => console.log(ip))
//   .catch((err) => console.error(err))
//   .finally(() => {
//     console.log('Odpytywanie API zakończone');
//   });

// const options = {
//   method: 'POST',
//   body: { name: 'Jan Kowalski' },
// };
// const promise = fetch('https://localhost.api/users', options);

// promise
//   .then((resp) => {
//     if (resp.ok) {
//       return resp.json();
//     }
//     return Promise.reject(resp);
//   })
//   .then((ip) => console.log(ip))
//   .catch((err) => console.error(err))
//   .finally(() => {
//     console.log('Odpytywanie API zakończone');
//   });

// const options = {
//   method: 'DELETE',
// };
// const promise = fetch('https://localhost.api/users/11', options);
// promise
//   .then((resp) => {
//     if (resp.ok) {
//       return resp.json();
//     }
//     return Promise.reject(resp);
//   })
//   .then((ip) => console.log(ip))
//   .catch((err) => console.error(err))
//   .finally(() => {
//     console.log('Odpytywanie API zakończone');
//   });

// const options = {
//   method: 'GET', //domyślne ustawienie
// };
// const promise = fetch('https://jsonplaceholder.typicode.com/todos', options);

// promise
//   .then((resp) => {
//     if (resp.ok) {
//       return resp.json();
//     }
//     return Promise.reject(resp);
//   })
//   .then((ip) => console.log(ip))
//   .catch((err) => console.error(err));

// const options = { method: 'GET' };
// const promise = fetch(
//   'https://jsonplaceholder.typicode.com/todos/wrongID',
//   options
// );

// promise
//   .then((resp) => {
//     if (resp.ok) {
//       return resp.json();
//     }
//     if (resp.status === 404) {
//       return Promise.reject('NOT FOUND');
//     }
//     return Promise.reject(resp);
//   })
//   .then((ip) => console.log(ip))
//   .catch((err) => console.error(err));

// const options = {
//   method: 'GET', // domyslne ustawienie
// };
// const promise = fetch('https://premium-api.example/news', options);

// promise
//   .then((resp) => {
//     if (resp.ok) {
//       return resp.json();
//     }
//     if (resp.status === 429) {
//       return Promise.reject('LIMIT EXCEEDED');
//     }
//     return Promise.reject(resp);
//   })
//   .then((ip) => console.log(ip))
//   .catch((err) => console.error(err));

// {
//  "movies" [
//  {
//  "title": "Movie 1",
//  "description": "Super Movie 1"
//  },
//  {
//  "title": "Movie 2",
//  "description": "Super Movie 2"
//  }
//  ],
//  "count": 2
// }

// const json = `{"movies":[],"count":0}`
// const objFromJson = JSON.parse(json)

// const jsonFromObj = JSON.stringify(objFromJson)

// console.log(json === jsonFromObj);

// const options = {
//   method: 'GET', //domyślne ustawienie
// };
// const promise = fetch('https://jsonplaceholder.typicode.com/posts', options);

// promise
//   .then((resp) => {
//     if (resp.ok) {
//       return resp.json();
//     }
//     return Promise.reject(resp);
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// const data = { title: 'foo', body: 'text' };
// const options = {
//   method: 'POST', //odpowiednia metoda
//   body: JSON.stringify(data), // konwersja danych
//   headers: { 'Content-Type': 'application/json' },
//   // informacja o typie wysylanych danych
// };
// const promise = fetch('https://jsonplaceholder.typicode.com/posts', options);

// promise
//   .then((resp) => {
//     if (resp.ok) {
//       return resp.json();
//     }
//     return Promise.reject(resp);
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));
//   .catch((err) => console.error(err));
//   .catch((err) => console.error(err));
// promise
//   .then((resp) => {
//     if (resp.ok) {
//       return resp.json();
//     }
//     return Promise.reject(resp);
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));
import API from './API';
const api = new API();

const apiUrl = 'http://localhost:3000/excursions';

document.addEventListener('DOMContentLoaded', init);

function init() {
  console.log('DOM');
  loadExcursions();
  removeExcursions();
  addExcursions();
  updateExcursions();
}

function loadExcursions() {
  api
    .loadData()
    .then((data) => {
      insertExcursions(data);
    })
    .catch((err) => console.error(err));
}

function insertExcursions(excursionsArr) {
  const ulEl = document.querySelector('.excursions');
  ulEl.innerHTML = '';
  excursionsArr.forEach((item) => {
    const liEl = document.createElement('li');
    liEl.dataset.id = item.id;
    liEl.classList.add('excursions__item');
    liEl.innerHTML = `
    [<a href="#">usuń</a>]
    <span>${item.name}</span>
    <span>${item.price}</span> PLN
    <button>edytuj</button>
    `;
    ulEl.appendChild(liEl);
  });
}
function removeExcursions() {
  const ulEl = document.querySelector('.excursions');
  ulEl.addEventListener('click', (e) => {
    const targetEl = e.target;
    if (targetEl.tagName === 'A') {
      const parentEl = targetEl.parentElement;
      const id = parentEl.dataset.id;
      const options = { method: 'DELETE' };
      fetch(`${apiUrl}/${id}`, options)
        .then((resp) => console.log(resp))
        .catch((err) => console.error(err))
        .finally(loadExcursions);
    }
  });
}

function addExcursions() {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const { name, price } = e.target.elements;
    const data = {
      name: name.value,
      price: price.value,
    };
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(apiUrl, options)
      .then((resp) => console.log(resp))
      .catch((err) => console.err(err))
      .finally(loadExcursions);
  });
}

function updateExcursions() {
  const ulEl = document.querySelector('.excursions');
  ulEl.addEventListener('click', (e) => {
    const targetEl = e.target;
    if (targetEl.tagName === 'BUTTON') {
      const parentEl = targetEl.parentElement;
      const spanList = parentEl.querySelectorAll('span');
      const isEditable = [...spanList].every((span) => span.isContentEditable);
      if (isEditable) {
        // zapisz dane w API
        const id = parentEl.dataset.id;
        const data = {
          name: spanList[0].innerText,
          price: spanList[1].innerText,
        };
        const options = {
          method: 'PUT',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
        };
        fetch(`${apiUrl}/${id}`, options)
          .then((resp) => console.log(resp))
          .catch((err) => console.error(err))
          .finally(() => {
            targetEl.innerText = 'edytuj';
            spanList.forEach((span) => (span.contentEditable = false));
          });
      } else {
        // ustaw [contentEditable] na [true]
        targetEl.innerText = 'zapisz';
        spanList.forEach((span) => (span.contentEditable = true));
      }
    }
  });
}

function addExcursions() {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const { name, price } = e.target.elements;
    const data = {
      name: name.value,
      price: price.value,
    };

    api
      .addData(data)
      .catch((err) => console.error(err))
      .finally(loadExcursions);
  });
}
