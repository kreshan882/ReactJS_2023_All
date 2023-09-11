import React, { Component } from 'react';
import HitachiModuleKItems from '../nameList/HitachiModuleKItems';


class NameListCls extends Component {
    //1 ,5
    constructor(){
        super();
        console.log('call constractor');
        this.state= {
            getAName : false ,
            nameList : [{
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
          ]}


    }

    //2 Lifecircle Method, can call url
    componentDidMount(){
        console.log('call componentDidMount');
        fetch('https://randomuser.me/api').then((response) => {
        return response.json();
        })
        .then((responseData) => {
            
            //setNameList(nameList => nameList.concat([responseData.results[0]]));
            this.setState({nameList : this.state.nameList.concat([responseData.results[0]])  });
            console.log(this.state.nameList);
        });

    }

    //6 Lifecircle Method, can call url
    componentDidUpdate(){
        console.log('call componentDidUpdate');  
        if(this.state.getAName) {  // to stop loop

                fetch('https://randomuser.me/api').then((response) => {
                    return response.json();
                    })
                    .then((responseData) => {
                        this.setState({
                            getAName : false,
                            nameList : this.state.nameList.concat([responseData.results[0]])  
                        });
                        console.log(this.state.nameList);
                }); 
        }
        
    }
    
    //4
    addNameHandeler = () => {
        console.log('call addNameHandeler'); 
        console.log(this.state.getAName); // this - need to changed to arrow function  
        this.setState({getAName: true});  // call componentDidUpdate
        //this.setState({message:"butt to update"}); // call componentDidUpdate
    }

    //7
    nameListComp = () => {
        return this.state.nameList.map((aName) => {
          return (
            <HitachiModuleKItems 
                      key={aName.Id} 
                      name={aName.name.first} 
                      city={aName.location.city} 
                      img={aName.picture.medium} 
                      dob={aName.dob}
            />
          );
        });
      };

    //3
    render() {
        return (
            <div className='container mt-4'>
                <button className='btn btn-primary mb-2' onClick={this.addNameHandeler}>Add Name</button>
                <ul className='list-group'> {this.nameListComp()} </ul>
            </div>
        );
    }
}

// function NameListCls() {
//     return (
//         < >
//           <div className='container mt-4'>
//               <h1>hello NameListCls</h1>
//           </div>  
//         </ >
//       );
//     }


export default NameListCls;