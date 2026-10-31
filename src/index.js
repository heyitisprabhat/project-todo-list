import "./style.css";

import Todo from "./todo.js";
import Project from "./project.js";

const task = new Todo({
  title: "Buy milk",
  dueDate: "2026-10-28",
  priority: "high",
});

const personal = new Project({ name: "Personal" });

personal.todos.push(task);

console.log(personal);



const deleteById = (arr, id) => {
  return arr.filter((obj) => obj.id !== id);
}; // return a new array with deleted object

