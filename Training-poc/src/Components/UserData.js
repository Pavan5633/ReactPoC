import React, {useState, useEffect}from 'react'
import {NavLink} from 'react-router-dom'
import axios from '../service/UserService'
import NoMatch from './NoMatch'
   
function UserData() {
    const [userList, setuserList] = useState([]);
    const [dataLoading ,statusdataLoading] = useState(false)

    useEffect(() => {
        retrieveUsers();
      }, []);

      const retrieveUsers = () => {
       
        axios.getAll()
          .then(response => {
            statusdataLoading(false)
            setuserList(response.data);
            console.log(response.data);
            statusdataLoading(true)
          })
          .catch(e => {
            console.log(e);
          })
          
          
      }

      
    return (
        <>
        
        

        {dataLoading ?
        
        <div className='datacontainer' style={{display:'inline-block'}}>
            <div style={{display:'inline-block',width:'50%' ,float: 'center'}}><h3>Users data from SpringBoot </h3></div>
           <div style={{display:'inline-block',width:'50%',textAlign: 'center' }}> <NavLink to="/home" className='logoff' >Back</NavLink></div>                       
                <div style={{marginLeft:'30%'}}>
                    <table className="formcontainer">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>email</th>
                                <th>phone</th>
                                <th>skill</th>
                                <th>place</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userList.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.mail}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.skill}</td>
                                            <td>{user.place}</td>
                                            
                                            </tr>
                                )
                            }
                        </tbody>
                    </table>
                 
                </div>
          
         </div> : <div><NoMatch/></div> }
        
</>


    )
}

export default UserData
