import DomElement from '../dom';
import Create from './create';
import UI from '../ui';
import Storage from '../storage';
import global from '../global';

export default class Event {
  static addTodo() {
    DomElement.form.removeAttribute('class');
    DomElement.form.classList.add('new-todo');
    UI.displayForm();
  }

  static addList() {
    DomElement.form.removeAttribute('class');
    DomElement.form.classList.add('new-list');
    UI.displayForm();
  }

  static submitForm() {
    if (DomElement.form.classList.contains('new-todo')) {
      UI.createTodo(Create.todo());
    } else if (DomElement.form.classList.contains('new-list')) {
      UI.createList(Create.list());
    }

    DomElement.formTitle.value = '';
    DomElement.formDescription.value = '';
    DomElement.formDate.value = '';
    DomElement.getPriority().checked = false;
    DomElement.priority0.checked = true;
  }

  static selectList(listElements, e, index) {
    DomElement.allBtn.classList.remove('selected');
    listElements.forEach((element) => {
      element.classList.remove('selected');
    });
    e.classList.add('selected');
    global.currentList = index;
    UI.displayTodos(Storage.getLists(), global.currentList);
  }

  static selectAll(listElements) {
    global.currentList = null;
    listElements.forEach((element) => {
      element.classList.remove('selected');
    });
    DomElement.allBtn.classList.add('selected');
    UI.displayAll(this.getAllTodosArray());
  }

  static pickEmoji(e) {
    global.currentEmoji = e.detail.emoji;
  }

  static toggleCheckedState(targetIndex, targetTodo) {
    Storage.editTodo(global.currentList, targetIndex, 'checkbox');
    UI.toggleChecked(targetTodo);
  }

  static getAllTodosArray() {
    const allTodos = [];
    Storage.getLists().forEach((e) => {
      e.todos.forEach((element) => {
        allTodos.push(element);
      });
    });
    return allTodos;
  }
}
