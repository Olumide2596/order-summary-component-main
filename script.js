'use strict';

document.querySelector('.paid').addEventListener('click', function () {
  document.querySelector('.paid').textContent = 'Paid';
  document.querySelector('.button').style.backgroundColor = 'pink';
});
