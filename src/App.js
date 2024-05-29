import React,{useState,Suspense} from 'react';
import ChildComponent from './ChildComponent';
import CounterComponent from './CounterComponent';
import Fragments from './Fragments';
// import FetchData from './FetchData';
const FetchData = React.lazy(()=>import('./FetchData'));
function App() {
  const [name, setName] = useState('');
  const handleInput = (e)=>{
    setName(e.target.value)
  }
  
  return (
    <>
    <div className="App">
      <h3>Welcome to React.!</h3>
    </div>
    {/* <CounterComponent/> */}
    {/* <p>Your Name is :{name}</p> */}
    {/* <ChildComponent handleInput={handleInput}/> */}
    {/* <Suspense fallback={<div>Content is Loading..!</div>}><FetchData/></Suspense> */}
    <Fragments/>
    </>
  );
}

export default App;
