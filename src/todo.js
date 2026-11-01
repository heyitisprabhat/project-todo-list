function Todo({ todo }) {
  this.todo = todo;
  this.id = crypto.randomUUID();
}


export default Todo;