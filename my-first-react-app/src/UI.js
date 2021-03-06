import React, { useContext } from 'react';
import { TransactionContext } from './TransContext';

function Child() {
    let {Transaction} = useContext(TransactionContext);
  return (
 <div className ='Main'>
    
    <div className="track">
        <h1>Expense Tracker App</h1>
    </div>

    <div className="bal">
        <h3>Your Balance <br></br>$563 </h3>

    </div>

    <div className="expCont">
        <h3>Income <br></br> $23</h3>
        <h3>Expense <br></br> $263</h3>

    </div>
        <div className='his'>

        <h3>History</h3>
        <hr/>
        </div>
         <ul className ="tranList">
          {Transaction.map((transObj,ind)=>{
          
          return(<li key={ind}>

          <span>{transObj.desc}</span>
          <span>{transObj.amount}</span>
          </li> )
       
    } ) }
          </ul>
        <div className ='trs'>
            <h3> Add new Transaction</h3>
            <hr/>

            <form className='traForm'>
                <lable>
                Enter Description <br></br>
                <input type='text'></input>
                </lable>
                <br></br>
                <lable>
                Enter Amount <br></br>
                <input type='text'></input>
                </lable>
                <br></br>
                <br></br>
            <input type ='submit' value ="Add Transaction"/>
             </form>


        </div>
        </div>
    );
}

export default Child;
