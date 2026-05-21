//async/await

async function fetchTodo() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return res.json();
}

async function fetchUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return res.json();
}

async function main() {
  // Promise.all з async/await
  const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
  console.log("Promise.all результат:");
  console.log("Todo:", todo);
  console.log("User:", user.name);

  // Promise.race з async/await
  const first = await Promise.race([fetchTodo(), fetchUser()]);
  console.log("\nPromise.race результат:");
  console.log(first);
}

main().catch((error) => console.log("Помилка:", error));
