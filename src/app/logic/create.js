import DomElement from '../dom';
import Storage from '../storage';
import Todo from './todo';
import List from './list';
import global from '../global';

export default class Create {
  static todo() {
    const todo = new Todo(
      DomElement.formTitle.value,
      DomElement.formDescription.value,
      DomElement.getPriority().value,
      DomElement.formDate.value,
      global.currentList,
    );
    Storage.addTodo(todo);
    return todo;
  }

  static list() {
    const list = new List(DomElement.formTitle.value, global.currentEmoji);
    Storage.addList(list);
    return list;
  }
}
