import {useState,useEffect} from 'react';
import { Formik, Field, Form } from 'formik';
import { AiOutlineEye } from "react-icons/ai";
import '../App.css';


export default function PinInput({setPin}) {
const [inputsView,setInputsView] = useState('password')
const [inputsViewConfirm,setInputsViewConfirm] = useState('password')
const [success, setSuccess] = useState(false,'');

  useEffect(() => {
      const nextSibling = document.querySelector(`input[name='one']`);
        nextSibling.focus();
   });

const handleChange = e => {
  const { maxLength, value, name } = e.target;
  const [fieldName, fieldIndex] = name.split("-");
    if (name === 'one') {
      const nextSibling = document.querySelector(`input[name='two']`);
      if (nextSibling !== null) {
        nextSibling.focus();
      }
    }
    else if (name === 'two') {
        const nextSibling = document.querySelector(`input[name='three']`);
        if (nextSibling !== null) {
          nextSibling.focus();
        }
      }
      if (name === 'three') {
        const nextSibling = document.querySelector(`input[name='four']`);
        if (nextSibling !== null) {
          nextSibling.focus();
        }
      }
      if (name === 'oneConfirm') {
        const nextSibling = document.querySelector(`input[name='twoConfirm']`);
        if (nextSibling !== null) {
          nextSibling.focus();
        }
      }
      else if (name === 'twoConfirm') {
          const nextSibling = document.querySelector(`input[name='threeConfirm']`);
          if (nextSibling !== null) {
            nextSibling.focus();
          }
        }
        if (name === 'threeConfirm') {
          const nextSibling = document.querySelector(`input[name='fourConfirm']`);
          if (nextSibling !== null) {
            nextSibling.focus();
          }
        }
        if (name === 'fourConfirm') {
          const nextSibling = document.querySelector(`input[name='submit']`);
          if (nextSibling !== null) {
            nextSibling.focus();
          }
        }
//  }
}
const validate = (values , props/* only available when using withFormik */) => {

  const errors = {};
  if (!values.one) {
    errors.one = 'Required';
  }
  else if (!values.two) {
    errors.two = 'Required';
  }
  else if (!values.three) {
    errors.three = 'Required';
  }
  else if (!values.four) {
    errors.four = 'Required';
  }
  else if (!values.oneConfirm) {
    errors.oneConfirm = 'Required';
  }
  else if (!values.twoConfirm) {
    errors.twoConfirm = 'Required';
  }
  else if (!values.threeConfirm) {
    errors.threeConfirm = 'Required';
  }
  else if (!values.fourConfirm) {
    errors.fourConfirm = 'Required';
  }

   return errors
}

  return (

    <div className="container">
  <Formik
   initialValues={{
     one:'',
     two:'',
     three:'',
     four:'',
     oneConfirm:'',
     twoConfirm:'',
     threeConfirm:'',
     fourConfirm:'',
   }}
   validate={validate}
   onSubmit={async (values) => {
     await new Promise((r) => setTimeout(r, 500));
     if(values.one === values.oneConfirm && values.two === values.twoConfirm && values.three === values.threeConfirm && values.four === values.fourConfirm){
       setPin(`${values.one}${values.two}${values.three}${values.four}`)
          // alert(JSON.stringify(values))
     }
   }}
  >
  {({ errors, touched }) => (
   <Form>
   <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center',width:'100%',height:'auto'}}>
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'65%',marginBottom:20}}>


     <span style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%',margin:10,fontSize:16}}>Enter PIN</span>

    <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
          <Field
            id="one"
            name="one"
            placeholder="0"
           type={inputsView}
               maxlength={1}
              focus={true}
            onKeyUp={handleChange}
            className="digitInput"
          />
          <Field
            id="two"
            name="two"
            placeholder="0"
            type={inputsView}
               maxlength={1}
            onKeyUp={handleChange}
          className="digitInput"
          />
          <Field
            id="three"
            name="three"
            placeholder="0"
           type={inputsView}
               maxlength={1}
            onKeyUp={handleChange}
            className="digitInput"
          />
          <Field
            id="four"
            name="four"
            placeholder="0"
         type={inputsView}
               maxlength={1}
            onKeyUp={handleChange}
            className="digitInput"
          />
             <span
             onClick={()=>setInputsView(inputsView === 'text' ? 'password' : 'text')}
             style={{display:'flex',alignItems:'center',justifyContent:'center',margin:3}}
             >
             <AiOutlineEye color="gray" size={20}/>
             </span>

          </div>
          {errors.one ? <div className="error">{errors.one}</div> : null}
          {errors.two ? <div className="error">{errors.two}</div> : null}
          {errors.three ? <div className="error">{errors.three}</div> : null}
          {errors.four ? <div className="error">{errors.four}</div> : null}
          </div>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'65%',marginBottom:20}}>

          <span style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%',margin:10,fontSize:16}}>Confirm PIN</span>
           <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
                 <Field
                   id="oneConfirm"
                   name="oneConfirm"
                   placeholder="0"
                   type={inputsViewConfirm}
                  maxlength={1}
                   onKeyUp={handleChange}
                  className="digitInput"
                 />
                 <Field
                   id="twoConfirm"
                   name="twoConfirm"
                   placeholder="0"
                    type={inputsViewConfirm}
                   maxlength={1}
                   onKeyUp={handleChange}
                  className="digitInput"
                 />
                 <Field
                   id="threeConfirm"
                   name="threeConfirm"
                   placeholder="0"
                   type={inputsViewConfirm}
                      maxlength={1}
                   onKeyUp={handleChange}
                className="digitInput"
                 />
                 <Field
                   id="fourConfirm"
                   name="fourConfirm"
                   placeholder="0"
                   type={inputsViewConfirm}
                      maxlength={1}
                   onKeyUp={handleChange}
                   className="digitInput"
                 />
                 <span
                 onClick={()=>setInputsViewConfirm(inputsViewConfirm === 'text' ? 'password' : 'text')}
                 style={{display:'flex',alignItems:'center',justifyContent:'center',margin:3}}
                 >
                 <AiOutlineEye color="gray" size={20}/>
                 </span>

</div>
{errors.oneConfirm ? <div className="error">{errors.oneConfirm}</div> : null}
{errors.twoConfirm ? <div className="error">{errors.twoConfirm}</div> : null}
{errors.threeConfirm ? <div className="error">{errors.threeConfirm}</div> : null}
{errors.fourConfirm ? <div className="error">{errors.fourConfirm}</div> : null}
                 </div>
  <button type="submit" name="submit" className="nextBtn">NEXT</button>
     </div>

   </Form>
  )}
  </Formik>

  </div>
  );
}
