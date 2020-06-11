import React from 'react'
import {Formik, Form, Field,ErrorMessage} from 'formik'

import * as Yup from 'yup'
import TextError from './TextError'

const initialValues= {
    fname:'',
    lname:'',
    gender:'male',
    maritalstatus:'',
    dob:'',
    email:'',
    phone:'',
    skills:'react',
    comments:'',
    acknowledge: false,
    place:''
}

const validationSchema = Yup.object({
    fname: Yup.string().required('Required!'),
    lname: Yup.string().required('Required!'),
    dob: Yup.date().required('Required!'),
    gender: Yup.string().required('Required!'),
    maritalstatus: Yup.string().required('Required!'),
    phone: Yup.number().required('Required!'),
    email: Yup.string()
      .email('Invalid email format!')
      .required('Required!'),
       comments: Yup.string().required('Required!')
  })

 
    

  const onSubmit = (values ,event) => {

    console.log('form data',values)
    alert('Your form submitted'+ values.fname)

  }
function FormApp(){
    
    /*const handlePhone = (values) => { 
        values.acknowledge ?        
            <div className='row'>
                                        <div className='col-25'><label htmlFor='place'>Place:</label></div>
                                        <div className='col-75'>
                                          <Field type='text' id='place' name='place' />
                                          <ErrorMessage name='place' component={TextError}/>
                                         </div>
                                    </div>  
         : null
    } **/
   
        return (
            <Formik 
            initialValues={initialValues} 
             validationSchema={validationSchema}
             onSubmit={onSubmit}

                  >
                       {
                    formik =>{
                        return (
                            <div>
                <h2>Application Form</h2>
            <div className='container'>
               
                <Form>
                        <div className='row'>
                            <div className='col-25'><label htmlFor='fname'>First name:</label></div>
                            <div className='col-75'>
                                <Field type='text' id='fname' name='fname' />
                                <ErrorMessage name='fname' component={TextError}/>
                            </div>
                         </div>
                         <div className='row'>
                            <div className='col-25'><label htmlFor='lname'>Last name:</label></div>
                            <div className='col-75'>
                                <Field type='text' id='lname' name='lname'/>
                                <ErrorMessage name='lname' component={TextError}/>
                            </div>
                         </div>
                         <div  className='row'>
                            <div  className='col-25 '><label htmlFor="gender">Gender: </label></div>
                            <div className='col-75'>
                                 <Field type="radio" id="male" name="gender"  value='male'/>
                                 <label htmlFor="male">Male</label>
                                 <Field type="radio" id="female" name="gender" value='female' />
                                 <label htmlFor="female">Female</label>
                                 <ErrorMessage name='gender' component={TextError}/>
                            </div>
                         </div>
                         <div className='row'>
                             <div className='col-25'><label htmlFor="maritalstatus">Status:</label></div>
                             <div className='col-75'>
                                <Field type="checkbox" id="married" name="maritalstatus" value="married" />
                                <label htmlFor="married"> Married</label>
                                <Field type="checkbox" id="unmarried" name="maritalstatus" value="unmarried" />
                                <label htmlFor="unmarried"> Unmarried</label>
                                <ErrorMessage name='maritalstatus' component={TextError}/>
                             </div>
                        </div>
                        <div className='row'>
                            <div className='col-25'>
                                <label htmlFor="dob">DOB:</label>
                            </div>
                            <div className='col-75'>
                                <Field type="date" id="dob" name="dob" />
                                <ErrorMessage name='dob' component={TextError}/>
                            </div>
                        </div> 
                         <div className='row'>
                             <div className='col-25'>
                                <label htmlFor="email">Email:</label>
                             </div>
                             <div className='col-75'>
                                <Field type="email" id="email" name="email" />
                                <ErrorMessage name='email' component={TextError}/>
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
                                <label htmlFor="skills">Skills:</label>
                            </div>
                            <div className='col-75'>
                                <Field as='select' id="skills" name="skills" >
                                    <option value="react" defaultValue>React</option>
                                    <option value=".net">.Net</option>
                                    <option value="javascript">JavaScript</option>
                                    <option value="java">Java</option>
                                </Field>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-25'>
                                <label htmlFor="myfile">Comments:</label>
                            </div>
                            <div className='col-75'>
                                <Field as='textarea' id="comments" name="comments" />
                                <ErrorMessage name='comments' component={TextError}/>
                            </div>
                        </div>
                        <div className='row'>
                             <div className='col-75'>
                                <Field type="checkbox" id="acknowledge" name="acknowledge"  
                                />
                                <label htmlFor="acknowledge"> I Acknowledge the terms and conditions</label>
                                </div>
                                </div>
                                {formik.values.acknowledge && (
                                <div className='row'>
                                    <div className='col-25'><label htmlFor='place'>Place:</label></div>
                                    <div className='col-75'>
                                      <Field type='text' id='place' name='place' />
                                      <ErrorMessage name='place' component={TextError}/>
                                     </div>
                                </div>       )}
                        
                         <Field type="submit" id="submit" value="Submit" />
                </Form>
            </div>
            </div>

                        )
                    }
                }
            
            </Formik>
        )
    }

export default FormApp
