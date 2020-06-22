import React ,{useState } from 'react'
import {Formik, Form, Field,ErrorMessage} from 'formik'
import FormData from './FormData'
import * as Yup from 'yup'
import TextError from './TextError'
import axios from '../service/UserService'

const initialValues= {
    name:'',
    mail:'',
    phone:'',
    skill:'react',
    place:''    
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    phone: Yup.number().required('Required!'),
    mail: Yup.string()
      .email('Invalid email format!')
      .required('Required!')
      
  })

function NewFormApp(){
    
    const [btnshow,setBtnShow]= useState(false)
    const [formValues, setFormValues] = useState(initialValues)  

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
      };

    const handleSumbit=(values) => {
        return(
                <>
            {setBtnShow(true) }
             
            {console.log('formdata',values)}
            {axios.create(values)
                   .then(res => {
                    setFormValues({
                        name:res.data.name,
                        mail:res.data.mail,
                        phone:res.data.phone,
                        skill:res.data.skill,
                        place:res.data.place
                    }) 
                    console.log('form submit',res.data)
              })
              .catch(err => {
                   console.log(err)
              })
              }  
              {<FormData show={btnshow}/>}
              </>  )}

    return (
       
        <>
            
            
            <Formik 
            initialValues={formValues} 
             validationSchema={validationSchema}
             validateOnChange={handleInputChange}
             onSubmit={handleSumbit} 
                  >
                       {
                    formik =>{
                        return (
                            !btnshow ?
                            <div>
                
            <div className='formcontainer'>
            <h2>Application Form</h2>
                <Form>
                        <div className='row'>
                            <div className='col-25'><label htmlFor='name'>Username:</label></div>
                            <div className='col-75'>
                                <Field type='text' id='name' name='name' />
                                <ErrorMessage name='name' component={TextError}/>
                            </div>
                         </div>
                         <div className='row'>
                             <div className='col-25'>
                                <label htmlFor="mail">Email:</label>
                             </div>
                             <div className='col-75'>
                                <Field type="email" id="mail" name="mail" />
                                <ErrorMessage name='mail' component={TextError}/>
                             </div>
                        </div>                   
                        
                        <div className='row'>
                             <div className='col-25'>
                                <label htmlFor="phone">Contact No:</label>
                             </div>
                             <div className='col-75'>
                                <Field type="tel" id="phone" name="phone"  />   
                                <ErrorMessage name='phone' component={TextError}/>
                             </div>
                        </div>
                         
                        <div className='row'>
                            <div className='col-25'>
                                <label htmlFor="skill">Skills:</label>
                            </div>
                            <div className='col-75'>
                                <Field as='select' id="skill" name="skill" >
                                    <option value="react" defaultValue>React</option>
                                    <option value=".net">.Net</option>
                                    <option value="javascript">JavaScript</option>
                                    <option value="java">Java</option>
                                </Field>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-25'><label htmlFor='place'>Place:</label></div>
                            <div className='col-75'>
                                <Field type='text' id='place' name='place' />
                                <ErrorMessage name='place' component={TextError}/>
                             </div>
                        </div>       
                        
                        <Field type="button" id="load data" value="load data" 
                        />
                         <Field type="submit" id="submit" value="Submit" />
                       
                </Form>
            </div>
            </div>
                                 : null
                        )
                    }
                } 
            
            </Formik>
            </> 
         )
    }

export default NewFormApp
