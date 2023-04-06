
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import ComA from './components/ComA';
import ComB from './components/ComB';
function App() {
  const [data,setData]=useState("Harit")
  return (
    <div className="App">
      <Header/>
   <ComA data={data}/>
    </div>
  );
}

export default App;
