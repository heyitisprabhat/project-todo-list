function Project({ name }) {
  this.name = name;
  this.id = crypto.randomUUID();
  this.todos = [];
}

const deleteProjectById = (projects, id) => {
  return projects.filter((project) => project.id !== id);
};

export { deleteProjectById };

export default Project;
