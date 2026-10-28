import "./style.css";

function Todo({
  title,
  description = "",
  dueDate,
  priority = "normal",
  checklist = [],
  notes = "",
}) {
  // using destructuring to not mess up the order
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.checklist = checklist;
  this.notes = notes;
  this.id = crypto.randomUUID();
  this.completed = false;
}

// const task = new Todo({
//   title: "Buy milk",
//   dueDate: "2026-10-28",
//   priority: "high",
// });
 