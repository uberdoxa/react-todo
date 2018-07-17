var uuid =  require('node-uuid');
var moment = require('moment')

export var searchTextReducer  = (state ='',action) => {
    switch (action.type) {
      case 'SET_SEARCH_TEXT':
        return action.searchText;

      default:
        return state;
    }
}

// showCompletedReducer default false TOGGLE_SHOW_COMPLETED
export var showCompletedReducer  = (state = false, action) => {
    switch (action.type) {
      case 'TOGGLE_SHOW_COMPLETED':
        return !state;

      default:
        return state;
    }
}

export var todosReducer  = (state =[],action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
        ...state,
        action.todo
        ];

      case 'TOGGLE_TODO':

        return state.map((todo) => {
            var obj = Object.assign({},todo);
            var upObj= Object.assign({},action.updates);
            for(var i in upObj){
                obj[i]=upObj[i]
              }
          if (todo.id === action.id){
            return {
              obj
            }
          //   var nextCompleted = !todo.completed;
          //     obj.completed = nextCompleted;
          //     obj.completedAt = nextCompleted ? moment().unix() : undefined
          //   // return {
          //   //   ...todo,
          //   //   completed: nextCompleted,
          //   //   completedAt: nextCompleted ? moment().unix() : undefined
          //   // };
          //   return obj;
          }else{
            return todo;
          }
        });
      case 'ADD_TODOS':
        return [
        ...state,
        ...action.todos
        ];
      default:
        return state;
    }
}


