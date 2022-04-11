export default class Storage {
  static getLists() {
    let lists;
    if (localStorage.getItem('lists') === null) {
      lists = [];
    } else {
      lists = JSON.parse(localStorage.getItem('lists'));
    }
    return lists;
  }

  static addTodo(todo) {
    const lists = this.getLists();
    lists[todo.list].todos.push(todo);
    localStorage.setItem('lists', JSON.stringify(lists));
  }

  static editTodo(targetList, index, property) {
    const lists = this.getLists();
    if (property === 'checkbox') {
      lists[targetList].todos[index].checkbox = !lists[targetList].todos[index].checkbox;
    }
    localStorage.setItem('lists', JSON.stringify(lists));
  }

  static removeTodo(targetTodo) {
    const lists = this.getLists();
    lists[targetTodo.list].todos.forEach((todo, index) => {
      if (todo.title === targetTodo.title) {
        lists[targetTodo.list].splice(index, 1);
      }
    });
    localStorage.setItem('lists', JSON.stringify(lists));
  }

  static addList(list) {
    const lists = this.getLists();
    lists.push(list);
    localStorage.setItem('lists', JSON.stringify(lists));
  }

  static removeList(targetList) {
    const lists = this.getLists();
    lists.forEach((list, index) => {
      if (list.title === targetList.title) {
        lists.splice(index, 1);
      }
    });
    localStorage.setItem('lists', JSON.stringify(lists));
  }
}
