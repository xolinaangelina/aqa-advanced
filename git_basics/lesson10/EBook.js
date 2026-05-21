const Book = require("./Book");

class EBook extends Book {
  #fileFormat;

  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  get fileFormat() {
    return this.#fileFormat;
  }
  set fileFormat(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Формат файлу має бути непорожнім рядком");
    }
    this.#fileFormat = value;
  }

  printInfo() {
    super.printInfo();
    console.log(`Формат файлу: ${this.#fileFormat}`);
  }

  static fromBook(book, fileFormat) {
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}

module.exports = EBook;
