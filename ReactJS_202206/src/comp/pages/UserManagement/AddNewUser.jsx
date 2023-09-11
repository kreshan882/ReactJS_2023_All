import React, { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import {v4 as uuid4} from 'uuid';
import { Link } from "react-router-dom";

function AddNewUser() {

  const [message,setMessage] = useState('');
  
  const initialValues= {
    title:'mr',
    description:'',
    dueDate:''
  };

  const onSubmit= (values,{resetForm}) => {
    console.log(values);
    const taskId=uuid4();
    //const task ={ id: '4',title: values.title ,description:values.description,dueDate:dueDate.description };
    const apiUrl=`https://reacttaskmanagerk-default-rtdb.asia-southeast1.firebasedatabase.app/TasksTable/${taskId}.json`;
    const task = { ...values, id: taskId, status: 'New',createdDate: new Date() };
    console.log(task);
    
    
    
    axios.put(apiUrl,task)
        .then((response) => {
          if(response.status==200){
            console.log('Data saved success...'+values.description);
            setMessage('Data saved success...:'+values.description);
            resetForm({values: ''});
          }
        })
        .catch((error) => {
          console.log(error);
          console.log('url not found');
          setMessage('fail to save saved.');
          
        });

  };

  const validate= (values) => {
    let errors ={};
      if(!values.title) {
          errors.title='please add title';
      }
      if(!values.description) {
        errors.description='please add description';
      }
      if(!values.dueDate) {
        errors.dueDate='please add dueDate number';
      }else if(!/^\d{1,2}\-\d{1,2}\-\d{2,4}$/.test(values.dueDate) ){ 
      //}else if(!/^\d{1,2}$/.test(values.dueDate) ){
        errors.dueDate='please select dueDate DD-MM-YYYY';
      }
    return errors;
  };

  const formik = useFormik({
      initialValues,
      onSubmit,
      validate,
  });

    return (
      <div className="container col-sm-8 mt-4">
          <h4 className="mb-4">Add/Edit Task</h4>
          <form onSubmit={formik.handleSubmit}>

        <div className="form-group">
          <label for="title">Title</label>
          <input type="text" className="form-control"  id="title"  aria-describedby="emailHelp"  
            onChange={formik.handleChange} /* Allow to Type*/
            value={formik.values.title}     /*pass the value when submit*/
            onBlur={formik.handleBlur}      /*validate for (on Blur +touched) values */
            />    
          {formik.touched.title && formik.errors.title? <div className="text-danger">{formik.errors.title}</div>: null}
        </div>
        
        <div className="form-group">
          <label for="description">Description</label>
          <textarea rows="4" type="text" className="form-control" id="description" aria-describedby="emailHelp" 
            onChange={formik.handleChange} 
            value={formik.values.description} 
            onBlur={formik.handleBlur} />
          {formik.touched.description && formik.errors.description? <div className="text-danger">{formik.errors.description}</div>: null}
        </div>
       
        <div className="form-group">
          <label for="dueDate">Due Date count</label>
          <input type="text" className="form-control" id="dueDate"  aria-describedby="emailHelp" 
            onChange={formik.handleChange} 
            value={formik.values.dueDate} 
            onBlur={formik.handleBlur}/>
          {formik.touched.dueDate && formik.errors.dueDate? <div className="text-danger">{formik.errors.dueDate}</div>: null}
        </div>
        
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
        {message? 
          <div className='alert alert-primary'>
            {message} -click heat to see all task <Link to="/TaskList" >All Task</Link >
          </div>
          :null
        }
      </div>
      );
    }

export default AddNewUser;
