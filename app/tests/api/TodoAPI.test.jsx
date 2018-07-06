var expect = require('expect');
var TodoAPI = require('TodoAPI');

describe('TodoAPI', () =>{
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('Should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () =>{
    it('Should set valid todos array', () =>{
      var todos =[{
        id: 23,
        test: 'test all files',
        completed: false
      }];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);

    });
    it('Should not set invalid todos array', () =>{
      var badTodos = { a: 'b'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () =>{
    it('Should return empty array for bad localStorage', ()=>{
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('Should return todo if valid array in localStorage', () =>{
      var todos =[{
        id: 23,
        test: 'test all files',
        completed: false
      }];
      localStorage.setItem('todos',JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();


      expect(actualTodos).toEqual(todos);

    });
  });

  describe('filterTodos', () => {
    var todos =[{
      id: 1,
      text: 'Some text here',
      completed: true
    },
    {
      id: 2,
      text: 'Other text here',
      completed: false
    },
    {
      id: 3,
      text: 'Some text here',
      completed: true
    }];

    it('Should return all items if showCompleted is true', ()=>{
      var filterTodos = TodoAPI.filterTodos(todos, true,'');
      expect(filterTodos.length).toBe(3);
    });

    it('Should return non-completed todos when showCompleted is false', ()=>{
      var filterTodos = TodoAPI.filterTodos(todos, false,'');
      expect(filterTodos.length).toBe(1);
    });

    it('Should sort by completed status', ()=>{
      var filterTodos = TodoAPI.filterTodos(todos,true,'');
      expect(filterTodos[0].completed).toBe(false);
    });

    it('Should filter todos by searchText', ()=>{
      var filterTodos = TodoAPI.filterTodos(todos, true,'some');
      expect(filterTodos.length).toBe(2);
    });

    it('Should return all todos is searchText is empty', ()=>{
      var filterTodos = TodoAPI.filterTodos(todos, true,'');
      expect(filterTodos.length).toBe(3);
    });

  });
});


























