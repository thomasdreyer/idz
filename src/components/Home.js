import '../App.css';

export default function Home({defineRoute}) {
  return (
    <div
 className="regBtn"
    style={{

      display:'flex',
       height: '100vh',
       width:'100%',
       flexDirection:'column',
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'#D9EBFE',
   }}
       >
    <span className="regBtn" style={{fontSize:50,fontWeight:'bold'}}>IDZ</span>
    <button
     style={{
       width:300,
       height:40,
       backgroundColor:'#61a188',
       border:'1px solid #61a188',
       color:'white',
       borderRadius:3,
       fontWeight:'bold',
      }}
     onClick={()=>defineRoute('CreateId')}>REGISTRATION</button>
    </div>
  );
}
