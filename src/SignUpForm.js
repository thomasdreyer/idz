import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
 import * as Yup from 'yup';
// /*
// ID meets accepted rules:
// Min length 3
// Max length 50
// a-z
// A-Z
// 0-9
// Dot
// Underscore
// Hyphen
// Must start with 0-9 or a-z
// Not in the 'banned list', eg 'IDZ'
// IDZ is a banned word
// checking the list should be case insensitive
// note: banned list can be just an array of strings
// Error message to user if invalid:
// Allowed characters 0-9 a-z dot underscore hyphen, must start with a letter or number
// When relevant: Minimum length 3 characters
// When relevant: Maximum length 50 characters
// Convert ID to lower case.
// */
//
// // Synchronous validation





const validate = (values, props /* only available when using withFormik */) => {
  const errors = {};

  if (!values.id) {
    errors.id = 'Required';
    errors.id = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.id)) {
    errors.id = 'Invalid email address';
  }
//
//   //...
//
  return errors;
};
 export default function SignUpForm(){
//


const SignupSchema = Yup.object().shape({
  id: Yup.string()
    .min(3, 'Too Short!')
    // .max(50, 'Too Long!')
    // .required('Required')
    .matches(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/, { excludeEmptyString: true }),

});

//
  return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%'}}>
     <button>Back</button>
     <h1>Create ID</h1>
     <Formik
       initialValues={{
         id:''
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         alert(JSON.stringify(values));
       }}
     >
     {({ errors, touched }) => (
       <Form>
       <div style={{display:'flex',flexDirection:'column',width:'50%'}}>
       <label htmlFor="id">ID</label>
        <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
              <Field
                id="id"
                name="id"
                placeholder="Create ID"
                type="text"
              />
              {errors.id && touched.id ? <div>{errors.id}</div> : null}
              <button type="submit">Submit</button>
              </div>

         </div>
       </Form>
     )}
   </Formik>
 </div>
//       <Form>
//
//         <label htmlFor="id">Email</label>
//         <Field
//           id="id"
//           name="id"
//           placeholder="jane@acme.com"
//           type="email"
//         />
//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   </div>
);
}
//
// import React from 'react';
//  import { Formik, Form, Field } from 'formik';
//  import * as Yup from 'yup';
//
//  const SignupSchema = Yup.object().shape({
//    firstName: Yup.string()
//      .min(2, 'Too Short!')
//      .max(50, 'Too Long!')
//      .required('Required'),
//    lastName: Yup.string()
//      .min(2, 'Too Short!')
//      .max(50, 'Too Long!')
//      .required('Required'),
//    email: Yup.string().email('Invalid email').required('Required'),
//  });
//
//  export default function ValidationSchemaExample(){
//    return(
//    <div>
//      <h1>Signup</h1>
//      <Formik
//        initialValues={{
//          firstName: '',
//          lastName: '',
//          email: '',
//        }}
//        validationSchema={SignupSchema}
//        onSubmit={values => {
//          // same shape as initial values
//          console.log(values);
//        }}
//      >
//        {({ errors, touched }) => (
//          <Form>
//            <Field name="firstName" />
//            {errors.firstName && touched.firstName ? (
//              <div>{errors.firstName}</div>
//            ) : null}
//            <Field name="lastName" />
//            {errors.lastName && touched.lastName ? (
//              <div>{errors.lastName}</div>
//            ) : null}
//            <Field name="email" type="email" />
//            {errors.email && touched.email ? <div>{errors.email}</div> : null}
//            <button type="submit">Submit</button>
//          </Form>
//        )}
//      </Formik>
//    </div>
//  );
// }
