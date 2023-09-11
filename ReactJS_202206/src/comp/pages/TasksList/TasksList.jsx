import React, { useEffect, useState } from 'react';
import moment from 'moment';
import TaskItem from './TaskItem';
import axios from 'axios';

function TodoList() {
  // const [tasks, setTasks] = useState([
  //   {
  //     id: '1',
  //     title: 'Task 1',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar ornare nisi, in hendrerit tellus ultricies et. ',
  //     createdDate: new Date(),
  //     dueDate: moment().add(3, 'days').format('DD-MM-yyyy'),
  //     status: 'New',
  //   },
  //   {
  //     id: '2',
  //     title: 'Task 2',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar ornare nisi, in hendrerit tellus ultricies et. ',
  //     createdDate: new Date(),
  //     dueDate: moment().add(3, 'days').format('DD-MM-yyyy'),
  //     status: 'New',
  //   },
  // ]);

  const [tasks, setTasks] = useState([]);
  const [tasksUpdates, settasksUpdates] = useState(false);

  useEffect(() =>{
    const apiUrl=`https://reacttaskmanagerk-default-rtdb.asia-southeast1.firebasedatabase.app/TasksTable.json`;
    axios.get(apiUrl)
    .then(response => {
        if (response.data){
          console.log(Object.values(response.data));
          setTasks(Object.values(response.data));
        }
    });
  },[tasksUpdates]);

  const handelComplete = (taskId) => {
    const apiUrl=`https://reacttaskmanagerk-default-rtdb.asia-southeast1.firebasedatabase.app/TasksTable/${taskId}.json`;
    axios.patch(apiUrl, {status:"Completed"})
    .then((response) =>{
        console.log('status updated.......')
        settasksUpdates(!tasksUpdates);
    });
  };

  const handelDelete = (taskId) => {
    const apiUrl=`https://reacttaskmanagerk-default-rtdb.asia-southeast1.firebasedatabase.app/TasksTable/${taskId}.json`;
    axios.delete(apiUrl)
    .then((response) =>{
        console.log('status deleted.......')
        settasksUpdates(!tasksUpdates);
    });
  };

  const displayTasks = () => {
    return tasks.map((task) => {
      return <TaskItem key={task.id} taskInfo={task} onComplete={handelComplete} onDelete={handelDelete}/>;
    });
  };

  return (
    <div className="container mt-4">
      <div className="row">{displayTasks()}</div>
    </div>
  );
}

export default TodoList;
