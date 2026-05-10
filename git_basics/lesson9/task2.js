//Деструктуризація об'єкта book

const book = {
  title: 'Кобзар',
  author: 'Тарас Шевченко',
  year: '1840'
};

const { title, author } = book;

console.log('Назва:', title);
console.log('Автор:', author);