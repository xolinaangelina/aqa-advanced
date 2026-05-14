const Book = require('./Book');
const EBook = require('./EBook');

// екземпляри Book
const book1 = new Book('Кобзар', 'Тарас Шевченко', 1840);
const book2 = new Book('Лісова пісня', 'Леся Українка', 1911);

// Виклик printInfo для Book
console.log('--- Книги ---');
book1.printInfo();
book2.printInfo();

// Створення екземпляра EBook
const ebook1 = new EBook('Гаррі Поттер', 'Дж. Роулінг', 1997, 'PDF');

// Виклик printInfo для EBook
console.log('\n--- Електронна книга ---');
ebook1.printInfo();

// Статичний метод getOldest
console.log('\n--- Найдавніша книга ---');
const oldest = Book.getOldest([book1, book2, ebook1]);
oldest.printInfo();

// Статичний метод fromBook
console.log('\n--- EBook з Book ---');
const ebookFromBook = EBook.fromBook(book2, 'EPUB');
ebookFromBook.printInfo();