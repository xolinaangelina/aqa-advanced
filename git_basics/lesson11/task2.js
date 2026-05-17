//Promise, then/catch, Promise.all, Promise.race

function fetchTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json());
}

function fetchUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json());
}

// Promise.all
Promise.all([fetchTodo(), fetchUser()])
  .then(([todo, user]) => {
    console.log('Promise.all результат:');
    console.log('Todo:', todo);
    console.log('User:', user.name);
  })
  .catch(error => console.log('Помилка:', error));

// Promise.race
Promise.race([fetchTodo(), fetchUser()])
  .then(result => {
    console.log('Promise.race результат (перший виконаний):');
    console.log(result);
  })
  .catch(error => console.log('Помилка:', error));