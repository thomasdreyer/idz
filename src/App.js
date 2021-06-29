import {useState} from 'react';
import Home from './components/Home';
import CreateId from './components/CreateId';
import AddPin from './components/AddPin';

function App() {
  const [route,setRoute] = useState('Home');
  const [id,setId] = useState('');

  return (

    route === 'Home' ?
    <Home defineRoute={(val)=>setRoute(val)}/> :
    ( route === 'CreateId' ?
    <div className="App">
     <CreateId defineRoute={(val)=>setRoute(val)} setID={(val)=>setId(val)}/>
     </div>  :
     <div className="App">
     <AddPin defineRoute={(val)=>setRoute(val)} id={id}/>
   </div>)


  );
}

export default App;
