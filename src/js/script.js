const teste = class {
  getJson() {
   const e = $.getJSON('database.json').done(function(data) {
      return data.responseJSON;
    });
    return e;
  }
};


var classe = new teste
console.log(classe.getJson())
  

// (function () {
//   'use strict';

//   var btnAdd = document.querySelector('#add')
//   var btnRemove = document.querySelector('#remove')

//   function setLocalStorage() {
//     btnAdd.addEventListener('click', () => {
//       localStorage.setItem('nome', 'Jack Sparrow')
//     })
//   }

//   // function getLocalStorage() {
//   //   btnGetItem.addEventListener('click', () => {
//   //     console.log(localStorage.getItem('nome'))
//   //   })
//   // }

//   function removeLocalStorage(){
//     btnRemove.addEventListener('click', () => {
//       localStorage.removeItem('nome')
//     })
//   }

//   setLocalStorage();
//   // getLocalStorage();
//   removeLocalStorage();

// }());


