var React = require('react');

var Todo = React.createClass({
  x: function(){

  },
  render: function(){
    var {id, text, completed} = this.props;
    return(
      <div onClick={() =>{
        this.props.onToggle(id);
      }}>
      <input type ='checkbox' onChange={this.x} checked={completed}/>
      {text}
    </div>
    )
  }
});

module.exports = Todo;
