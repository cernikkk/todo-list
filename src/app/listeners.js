import DomElement from './dom';
import Event from './logic/event';

export default class BindEvents {
  static constants() {
    DomElement.addTodoBtn.addEventListener('click', Event.addTodo);
    DomElement.addListBtn.addEventListener('click', Event.addList);

    DomElement.form.addEventListener('submit', (e) => {
      e.preventDefault();
      Event.submitForm();
      this.updateLists();
      this.updateTodos();
    });

    DomElement.allBtn.addEventListener('click', (e) => {
      e.preventDefault();
      Event.selectAll(DomElement.getNamedList());
      this.updateTodos();
    });

    DomElement.emojiPicker.addEventListener('emoji-pick', (e) => {
      Event.pickEmoji(e);
    });
  }

  static updateTodos() {
    DomElement.getTodosList().forEach((e, index) => {
      e.addEventListener('click', (event) => {
        if (event.target.type === 'checkbox') {
          Event.toggleCheckedState(index, e);
        }
      });
    });
  }

  static updateLists() {
    const listElements = DomElement.getNamedList();
    listElements.forEach((e, index) => {
      e.addEventListener('click', () => {
        Event.selectList(listElements, e, index);
        this.updateTodos();
      });
    });
  }

  static updateAll() {
    this.constants();
    this.updateTodos();
    this.updateLists();
  }
}
