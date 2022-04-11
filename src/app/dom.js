export default (() => {
  const body = document.querySelector('body');
  const main = document.querySelector('.main');
  const addTodoBtn = document.querySelector('.add-todo');
  const addListBtn = document.querySelector('.add-list');
  const form = document.getElementById('add-todo-form');
  const formTitle = document.querySelector('.title');
  const formDescription = document.querySelector('.description-content');
  const formWrapper = document.querySelector('.wrapper');
  const descriptionContainer = document.querySelector('.description-container');
  const formDate = document.querySelector('.due-date');
  const todoList = document.querySelector('.list ul');
  const namedLists = document.querySelector('.named-lists ul');
  const emojiPicker = document.querySelector('unicode-emoji-picker');
  const allBtn = document.querySelector('.all');
  const listEmoji = document.querySelector('.top-bar .list-emoji');
  const listTitle = document.querySelector('.top-bar .list-title');
  const descriptionPanel = document.querySelector('.description');
  const priority0 = document.getElementById('priority-0');

  const getNamedList = () => document.querySelectorAll('.named-lists ul li');
  const getTodosList = () => document.querySelectorAll('.list ul li');
  const getPriority = () => document.querySelector('input[name="priority"]:checked');

  return {
    body,
    main,
    addTodoBtn,
    addListBtn,
    form,
    formTitle,
    formDescription,
    formWrapper,
    descriptionContainer,
    formDate,
    todoList,
    namedLists,
    emojiPicker,
    allBtn,
    listEmoji,
    listTitle,
    descriptionPanel,
    getNamedList,
    getPriority,
    priority0,
    getTodosList,
  };
})();
