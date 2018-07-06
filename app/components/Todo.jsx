var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  x: function(){

  },
  render: function(){
    var {id, text, completed, createdAt, completedAt} = this.props;
    var renderDate = () =>{
      var message = 'Created ';
      var timestamp = createdAt;

      if (completed){
        message = 'Completed ';
        timestamp = completedAt;
      }

return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };
    return(
      <div onClick={() =>{
        this.props.onToggle(id);
      }}>
      <input type ='checkbox' onChange={this.x} checked={completed}/>
      {text}
      <p>{renderDate()}</p>
    </div>
    )
  }
});

module.exports = Todo;
