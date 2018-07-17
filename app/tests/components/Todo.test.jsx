var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

import * as actions from 'actions';
import {Todo} from 'Todo';

 describe('Todo',()=>{
  it('Should exist', ()=>{
  expect(Todo).toExist();
});

  it('Should dispatch TOGGLE_TODO action on click', ()=>{
    var todoData = {
    id: 199,
    text: 'Write todo.test.jsx test',
    completed: true
  };
  var actions = actions.startToggleTodo(todoData.id, !todoData.completed)

  var spy = expect.createSpy();
  var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
  var $el = $(ReactDOM.findDOMNode(todo));

  TestUtils.Simulate.click($el[0]);

  expect(spy).toHaveBeenCalledWith(action);
});
 });
