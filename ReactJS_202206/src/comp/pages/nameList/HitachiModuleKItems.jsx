import React from 'react';
import moment from 'moment';
import "./HitachiModuleKItems.css";

function HitachiModuleKItems(props){
    return(
        <React.Fragment >
            <li className='list-group-item'>
                <div className='row align-items-center'>
                    <div className='col-2 '>
                            <p><img src={props.img} className="border border-primary rounded-circle"/></p>
                    </div>

                    <div className='col-10'>
                            <h4 className='redText'>{props.name}</h4>
                            <p style={{color: 'green'}} >{props.city}</p>
                            <p>{moment(props.dob).format('DD-MM-YYYY') }</p>
                    </div>

                </div>
               
                
            </li>
        </React.Fragment>
        
    );
}
export default HitachiModuleKItems;