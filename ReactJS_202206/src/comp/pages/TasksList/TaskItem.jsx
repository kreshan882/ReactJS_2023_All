import React from 'react';

function TaskItem(props) {
  const borderColor = props.taskInfo.status === 'Completed' ? 'border-primary' : '';
  return (
    <div className={'card m-1 col-3 p-0 border ' + borderColor}>
      <div className="card-body">
        <div className="row">
          <div className="col">
            <h5 className="card-title">{props.taskInfo.title}</h5>
          </div>
          <div className="col text-right">
            <small>{props.taskInfo.dueDate}</small>
          </div>
        </div>

        <p className="card-text">{props.taskInfo.description}</p>
        <button className="btn btn-success btn-sm mr-2" onClick={() => props.onComplete(props.taskInfo.id)}>Complete</button>
        <button className="btn btn-danger btn-sm mr-2"  onClick={() => props.onDelete(props.taskInfo.id)}>Delete</button>
        <button className="btn btn-edit btn-sm" >edit</button>
      </div>
    </div>
  );
}

export default TaskItem;
