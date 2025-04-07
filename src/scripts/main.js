'use strict';

// write code here

const list = document.querySelector('ul');

const sortedItems = Array.from(list.children).sort((item1, item2) => {
  return (
    Number(item2.dataset.salary.replaceAll('$', '').replaceAll(',', '')) -
    Number(item1.dataset.salary.replaceAll('$', '').replaceAll(',', ''))
  );
});

sortedItems.forEach((item) => list.appendChild(item));
