function Project({ name }) {
  this.name = name;
  this.id = crypto.randomUUID();
  this.todos = [];
}



export default Project;