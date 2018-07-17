import moment from 'moment';
import firbase, {firebaseRef} from 'app/firebase/index';



export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

//toggleShowCompleted TOGGLE_SHOW_COMPLETED
export var toggleShowCompleted  = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED',
  };
};


export var startAddTodo = (text) => {
  return (dispatch,getState) => {
    var todo = {
          text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: null
        };
        var todoRef = firebaseRef.child('todos').push(todo);
        var xObj = Object.assign({},todo)
        return todoRef.then(() => {
          xObj.id= todoRef.key;
          dispatch(addTodo(xObj));
        });
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  };
};

export var startToggleTodo = (id,completed) => {
  return (dispatch, getState) => {
    var todoRef = firebaseRef.child(`todos/${id}`);
    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };

    todoRef.update(updates).then(()=>{
      dispatch(updateTodo(id, updates));
    });
  };
};















