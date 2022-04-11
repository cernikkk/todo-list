export default class List {
  constructor(title, emoji = null, todos = [], completed = []) {
    this.title = title;
    this.emoji = emoji;
    this.todos = todos;
    this.completed = completed;
  }
}
