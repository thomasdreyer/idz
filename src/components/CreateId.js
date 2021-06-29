import {useEffect} from 'react';
import { Formik, Field, Form } from 'formik';
import { BsArrowRight} from "react-icons/bs";
import '../App.css';
import BackBtn from './BackBtn';

const bannedList = [
  "idz",
  "facebook",
  "Google.",
];


export default function CreateId({defineRoute,setID}) {
  useEffect(() => {
       document.querySelector(`input[name='id']`).focus();
   });

  const validate = (values , props/* only available when using withFormik */) => {
    const errors = {};
    if (!values.id) {
      errors.id = 'ID is Required';
    }
    else if (values.id.length < 3) {
      errors.id = 'Minimum length 3 characters';
    }
    else if (values.id.length > 50) {
      errors.id = 'Maximum length 50 characters';
    }
    else if (!/^[a-z0-9]+[A-Z0-9._-]/.test(values.id)) {
     errors.id = 'Allowed characters 0-9 a-z dot underscore hyphen, must start with a letter or number';
   }
  else if(checkBandList(values.id)){
     errors.id = 'ID is in band list';
  }
     return errors
  }
  const checkBandList = (value)=>{
    const isBand = bannedList.filter((b,i)=>{
      return b.toLowerCase() === value.toLowerCase()
    })
         if(isBand.length < 1){
           return false
         }
          else{
             return true
          }
  }
  const setId = (value) =>{
    const idArray = value.id.split('');
     for(let i = 0; i < idArray.length; i++){
       if(/[A-Z]/.test(idArray[i])){
         idArray[i] = idArray[i].toLowerCase();
       }

     }
     const id = idArray.join('');
      setID(id);
      defineRoute('AddPin');
  }
  return (
    <div className="container">
      <div className="header">
        <BackBtn onSubmit={()=>defineRoute('Home')}/>
        <h1>Create your ID</h1>
     </div>

    <Formik
     initialValues={{id:''}}
     validate={validate}
     onSubmit={async (values) => {
       await new Promise((r) => setTimeout(r, 500));
       setId(values)
     }}
   >

  {({ errors, touched }) => (
   <Form>

   <div style={{display:'flex',flexDirection:'column',width:'100%'}}>
         <label htmlFor="id" className="regBtn" style={{color:'lightgray'}}>ID</label>
         <div className="idInput">
            <Field id="id" name="id" type="text"className="field"/>
            <button type="submit"className="submitBtn">
              <BsArrowRight color="white" size={20}/>
            </button>
         </div>
          {errors.id && touched.id ? <div className="error">{errors.id}</div> : null}
   </div>

   </Form>
  )}
  </Formik>
  </div>
  );
}
