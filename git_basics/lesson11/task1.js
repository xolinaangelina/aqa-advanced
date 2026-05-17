function printWithDelay(text, ms) {
  setTimeout(() => {
    console.log(text);
  }, ms);
}

printWithDelay('Привіт через 1 секунду!', 1000);
printWithDelay('Привіт через 2 секунди!', 2000);