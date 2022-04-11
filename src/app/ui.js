import DomElement from './dom';

export default class UI {
  static createTodo(targetTodo, all = false) {
    const todo = document.createElement('li');
    todo.classList.add(`priority-${targetTodo.priority}`);
    if (targetTodo.checkbox) todo.classList.add('checked');

    const firstDiv = document.createElement('div');
    const secondDiv = document.createElement('div');

    const title = document.createElement('div');
    title.classList.add('todo-title');
    title.innerHTML = targetTodo.title;

    const date = document.createElement('div');
    date.classList.add('todo-due-date');
    date.innerHTML = targetTodo.dueDate;
    secondDiv.append(date);

    if (!all) {
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      if (targetTodo.checkbox) checkbox.setAttribute('checked', '');
      checkbox.removeAttribute('class');
      firstDiv.append(checkbox);

      const button = document.createElement('button');
      button.setAttribute('type', 'button');
      button.classList.add('delete-todo');
      secondDiv.append(button);
      button.innerHTML = '&#215';
    }

    DomElement.todoList.append(todo);
    todo.append(firstDiv);
    todo.append(secondDiv);
    firstDiv.append(title);
  }

  static createList(targetList) {
    const list = document.createElement('li');

    const content = document.createElement('a');

    const emoji = document.createElement('div');
    emoji.innerHTML = targetList.emoji;
    const title = document.createElement('div');
    title.innerHTML = targetList.title;

    DomElement.namedLists.append(list);
    list.append(content);
    content.append(emoji);
    content.append(title);
  }

  static displayTodos(storedLists, currentList) {
    DomElement.todoList.innerHTML = '';
    storedLists[currentList].todos.forEach((element) => {
      this.createTodo(element);
    });
    DomElement.listEmoji.innerHTML = storedLists[currentList].emoji;
    DomElement.listTitle.innerHTML = storedLists[currentList].title;
  }

  static displayLists(storedLists) {
    storedLists.forEach((element) => {
      if (Object.prototype.hasOwnProperty.call(element, 'title')) {
        this.createList(element);
      }
    });
  }

  static toggleChecked(targetTodo) {
    if (targetTodo.classList.contains('checked')) {
      targetTodo.removeAttribute('checked');
      targetTodo.classList.remove('checked');
    } else {
      targetTodo.setAttribute('checked', '');
      targetTodo.classList.add('checked');
    }
  }

  static displayAll(storedLists) {
    DomElement.todoList.innerHTML = '';
    storedLists.forEach((element) => {
      this.createTodo(element, true);
    });
    DomElement.listEmoji.innerHTML = '◽';
    DomElement.listTitle.innerHTML = 'All';
  }

  static displayForm() {
    if (DomElement.form.hasAttribute('class')) {
      DomElement.descriptionPanel.style.display = 'block';
      DomElement.main.style.gridTemplateColumns = '1fr 3fr 2fr';
    } else {
      DomElement.descriptionPanel.style.display = 'none';
      DomElement.main.style.gridTemplateColumns = '1fr 3fr';
    }
    if (DomElement.form.classList.contains('new-list')) {
      DomElement.descriptionContainer.style.display = 'none';
      DomElement.formWrapper.style.display = 'none';
      DomElement.emojiPicker.style.display = 'flex';
    }
    if (DomElement.form.classList.contains('new-todo')) {
      DomElement.descriptionContainer.style.display = 'flex';
      DomElement.formWrapper.style.display = 'flex';
      DomElement.emojiPicker.style.display = 'none';
    }
  }

  static updateAll(storedLists, currentList) {
    if (storedLists.length !== 0) {
      this.displayLists(storedLists);
      this.displayTodos(storedLists, currentList);
    }
  }
}
