import React from 'react';
import './App.css';
import Child from './UI'
import { TransactionProviderr } from './TransContext';


function App() {
  return (
 <div>
   <TransactionProviderr>
    
    <Child/>

   </TransactionProviderr>
  
 </div>
    );
}

export default App;
