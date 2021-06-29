import {useState,useEffect} from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { AiOutlineEye,AiOutlineCheck } from "react-icons/ai";
import '../App.css';
import BackBtn from './BackBtn';
import PinInput from './PinInput';
export default function AddPin({defineRoute,id}) {

const [pin,setPin] = useState('')

  return (

    <div className="container">




{ pin !== '' ?
<div className="success">
<h1>Success <AiOutlineCheck color="green" size={30}/></h1>
<span style={{fontWeight:'bold'}}>Your ID: {id}</span>
<span style={{fontWeight:'bold'}}>Your PIN: {pin}</span>

</div>:
<>
<div className="header">
  <BackBtn onSubmit={()=>defineRoute('Home')}/>
  <h1>Add PIN</h1>
  <span style={{color:'lightgray'}}>Your PIN will protect your ID</span>
</div>
 <PinInput setPin={(val)=>setPin(val)}/>
 </>
}



  </div>
  );
}
