import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

var expect = require('expect') ;
var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('Should generate search text action', () => {
    var action = {
          type: 'SET_SEARCH_TEXT',
          searchText: 'Some search text'
        };
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

   it('Should generate add todo action', () => {
    var action = {
          type: 'ADD_TODO',
          todo: {
            id: '123gsdfg',
            text: 'Anything we like',
            completed: false,
            createdAt: 0
          }
        };
    var res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });

   //cvdffds
      it('Should create todo and dispatch ADD_TODO', (done) => {
      const store = createMockStore({});
      const todoText = 'My todo item';

      store.dispatch(actions.startAddTodo(todoText))
      .then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toInclude({
          type: 'ADD_TODO'
        });
        expect(actions[0].todo).toInclude({
          text: todoText
        });
        done();
      }
      // ,()=>{

      // }
      ).catch(done);
    });
   //
   it('Should generate toggle showcompleted action', () => {
    var action = {
          type: 'TOGGLE_SHOW_COMPLETED',
        };
    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

   //---------
    it('Should generate add todos action object', () => {
    var todos =  [{
      id: 111,
      test: 'anything',
      completed: false,
      completedAt: undefined,
      createdAt: 33000
    }];
    var action = {
      type: 'ADD_TODOS',
      todos
    }
    var res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });
   //---------

   it('Should generate toggle Todo action', () => {
    var action = {
          type: 'TOGGLE_TODO',
          id: 17
        };
    var res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });


});

