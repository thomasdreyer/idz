
import { FaChevronLeft } from "react-icons/fa";

export default function BackBtn({onSubmit}) {

  return (
  <button
  className="backBtn"
  style={{
    display:'flex',
    flexDirection:'row',
     justifyContent:'space-around',
     alignItems:'center',
    width:80,
    height:40,
    border:'1px solid #F7F7FA',
    borderRadius:3,
    backgroundColor:'#F7F7FA',
    cursor:'pointer',
    fontWeight:'bold'
  }}
  onClick={()=>onSubmit()}><FaChevronLeft color="black"/>BACK</button>

  );
}
