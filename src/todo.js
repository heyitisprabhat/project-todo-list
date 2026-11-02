function Todo({
  title,
  description = "",
  dueDate,
  priority = "normal",
  notes = "",
}) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.id = crypto.randomUUID();
  this.completed = false;
}

export default Todo;
