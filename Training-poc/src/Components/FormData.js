import React from 'react'
import {NavLink} from 'react-router-dom'
   
function FormData(props) {
     
    const itemlist = [];

    for ( let dname in props.data ) {
        itemlist.push(
            {
                fieldname: dname,
                value: props.data[dname]
            }
        );
    }

    const datalist = itemlist.map(ig => {
        return <span 
            style={{
                textTransform: 'capitalize',
                display: 'block',
                margin: '0 8px',
                textAlign: 'center',
                padding: '5px'
                }}
            key={ig.fieldname}>{ig.fieldname} :{ig.value}</span>;
    });

    return (
        props.show ?

        <div className='datacontainer' style={{display:'inline-block'}}>
            <div style={{display:'inline-block',width:'50%',textAlign: 'center' , textTransform: 'capitalize'}}><h2>Hi {props.data.fname} ! </h2></div>
           <div style={{display:'inline-block',width:'50%',textAlign: 'center' }}> <NavLink to="/home" className='logoff' >Logoff</NavLink></div>

         
         <div>{datalist}</div>
   
          
        </div> : null



    )
}

export default FormData
