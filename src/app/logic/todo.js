export default class Todo {
  constructor(
    title,
    description = null,
    priority = 0,
    dueDate = null,
    list = 0,
    checkbox = false,
  ) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.list = list;
    this.checkbox = checkbox;
  }
}
