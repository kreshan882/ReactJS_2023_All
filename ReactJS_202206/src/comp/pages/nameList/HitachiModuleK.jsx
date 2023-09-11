import React,{useState, useEffect} from 'react';
//import HeaderBar from '../headerBar/HeaderBar';
import HitachiModuleKItems from './HitachiModuleKItems';


function HitachiModuleK() {
    const[loadData,setLoadData]=useState(new Date());

    const [nameList,setNameList]=useState([{
      "Id" : "1",
      "name": { "title": "mr","first": "brad" },
      "location": {"city": "kilcoole",},
      "picture": {"medium": "https://randomuser.me/api/portraits/med/men/17.jpg"},
      "dob": "1993-07-20T09:44:18.674Z"
    },

    {
      "Id" : "2",
      "name": { "title": "mr","first": "kreshan" },
      "location": {"city": "matale",},
      "picture": {"medium": "https://randomuser.me/api/portraits/med/men/75.jpg"},
      "dob": "1988-07-20T09:44:18.674Z"
    }
    ]);

    
    const nameListComp = () => {
      return nameList.map((aName) => {
        return (
          <HitachiModuleKItems 
                    key={aName.Id} 
                    name={`mr. ${aName.name.first} ` } 
                    city={aName.location.city} 
                    img={aName.picture.medium} 
                    dob={aName.dob}
          />
        );
      });
    };

    const addUserHandeler=() => {
      console.log('button clicked kk');
      // const newUser={
      //   "Id" : "3",
      //   "name": { "title": "mr","first": "kreshan rr" },
      //   "location": {"city": "matale",},
      //   "picture": {"medium": "https://randomuser.me/api/portraits/med/men/75.jpg"},
      //   "dob": "1988-07-20T09:44:18.674Z"
      // };

      // //setNameList(nameList => nameList.concat(newUser));
      // setNameList((nameList) => [...nameList,newUser]) ; // stread operator
    setLoadData(new Date());  // request randem name
    };


    //inisilize or modifi  useState called this function
    useEffect(() => {
      console.log('render method call all time refresh & buttonclick');
	  
	  //get data from web
      fetch('https://randomuser.me/api')
	    .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData.results[0]);
        //setNameList([responseData.results[0]]);
        setNameList(nameList => nameList.concat([responseData.results[0]]));
      });
    }, [loadData]);  // 2nd paramenter load data using to stop loop, if call 2nd param only useEffect will call






    return (
      <React.Fragment >
        {/* {HeaderBar()} */}
        <div className='container mt-4'>
            <button className='btn btn-primary mb-2' onClick={addUserHandeler}>Add</button>
            <ul className='list-group'> {nameListComp()} </ul>
        </div>
        
      </React.Fragment >
    );
  }
  
  export default HitachiModuleK ;