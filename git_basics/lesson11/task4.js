//Класи з методами для запитів

class TodoService {
  async fetchTodo() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return res.json();
  }
}

class UserService {
  async fetchUser() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    return res.json();
  }
}

async function main() {
  const todoService = new TodoService();
  const userService = new UserService();

  // Promise.all
  const [todo, user] = await Promise.all([
    todoService.fetchTodo(),
    userService.fetchUser(),
  ]);
  console.log("Promise.all:");
  console.log("Todo:", todo);
  console.log("User:", user.name);

  // Promise.race
  const first = await Promise.race([
    todoService.fetchTodo(),
    userService.fetchUser(),
  ]);
  console.log("\nPromise.race:");
  console.log(first);
}

main().catch((error) => console.log("Помилка:", error));
