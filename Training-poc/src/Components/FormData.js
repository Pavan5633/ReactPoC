import React, {useState, useEffect}from 'react'
import {NavLink} from 'react-router-dom'
import axios from '../service/UserService'
   
function FormData(props) {
    const [userList, setuserList] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
  
    const itemlist = [];

    useEffect(() => {
        retrieveUsers();
      }, []);

      const retrieveUsers = () => {
        axios.getAll()
          .then(response => {
            setuserList(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };
      
      const refreshList = () => {
        retrieveUsers();
       
      };
     
     /* const deleteUser = () => {
        axios.remove(currentUser.id)
          .then(response => {
            console.log(response.data);
            props.history.push("/users");
          })
          .catch(e => {
            console.log(e);
          });
      }; **/

      const removeAllUsers = () => {
        axios.removeAll()
          .then(response => {
            console.log(response.data);
            refreshList();
          })
          .catch(e => {
            console.log(e);
          });
      };


   /* for ( let dname in userList ) {
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
    }); **/

    return (
        props.show ?

        <div className='datacontainer' style={{display:'inline-block'}}>
            <div style={{display:'inline-block',width:'50%' ,float: 'center', textTransform: 'capitalize'}}><h3>Users List </h3></div>
           <div style={{display:'inline-block',width:'50%',textAlign: 'center' }}> <NavLink to="/home" className='logoff' >Logoff</NavLink></div>                       
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
                  {/*  <button onClick={removeAllUsers} >Remove All users</button> **/}
                </div>
          
         </div> :null
        



    )
}

export default FormData
