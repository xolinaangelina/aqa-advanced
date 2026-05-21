class Book {
  #title;
  #author;
  #year;

  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get title() {
    return this.#title;
  }
  set title(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Назва має бути непорожнім рядком");
    }
    this.#title = value;
  }

  get author() {
    return this.#author;
  }
  set author(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Автор має бути непорожнім рядком");
    }
    this.#author = value;
  }

  get year() {
    return this.#year;
  }
  set year(value) {
    if (typeof value !== "number" || value < 0) {
      throw new Error("Рік має бути додатним числом");
    }
    this.#year = value;
  }

  printInfo() {
    console.log(
      `Назва: ${this.#title}, Автор: ${this.#author}, Рік: ${this.#year}`,
    );
  }

  static getOldest(books) {
    return books.reduce((oldest, book) =>
      book.year < oldest.year ? book : oldest,
    );
  }
}

module.exports = Book;
