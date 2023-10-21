'use strict';

const { rejects } = require('assert');
const { response } = require('express');
const { resolve } = require('path');

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
// import API from './API';
// import Excursions from './Excursions';

// document.addEventListener('DOMContentLoaded', init);

// function init() {
//   const api = new API();
//   const excursions = new Excursions(api);
//   excursions.load();
//   excursions.remove();
//   excursions.add();
//   excursions.update();
// }

// function getRandomNumber() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(Math.random());
//     }, 100);
//   });
// }

// async function showRandomPosition() {
//   const x = await getRandomNumber();
//   const y = await getRandomNumber();
//   console.log(x, y);
// }
// // function showRandomPosition() {
// //   let x, y;
// //   Promise.all([getRandomNumber(), getRandomNumber()]).then((responses) => {
// //     const [x, y] = responses;
// //     console.log(x, y);
// //   });
// // }

// // showRandomPosition();

// const position = getRandomNumber();
// position.then((resp) => console.log(resp));

function getRandomNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Błąd!');
    }, 100);
  });
}

async function getRandomPosition() {
  let x, y;
  try {
    x = await getRandomNumber();
    y = await getRandomNumber();
  } catch (e) {
    console.log('Wiadomość:', e);
    x = 0;
    y = 0;
  }
  return [x, y];
}

const position = getRandomPosition();
position.then((resp) => console.log(resp));
