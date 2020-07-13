import React, {createContext, useReducer, Children} from 'react';
import TranscationReducer from './TransReducer';

const initialTrans = [

    {amount : 500, desc: 'Case'},
    {amount : 40, desc: "IT"},
    {amount : -30 ,desc: "Educaton"}]

export const TransactionContext = createContext(initialTrans);

let [state,dispatch] = useReducer (createContext,initialTrans);

export const TransactionProviderr = ({}) => 
{
    let [state ,dispatch] = useReducer(TranscationReducer,initialTrans);

    function addTransaction(transObj) {
        dispatch( {
            type: "Add Trans",
            payload: {
                amount :transObj.amount,
                desc: transObj.desc
                },
            
        } )
}    
    return(
        <TransactionContext.Provider value={{
           transaction:state,
           addTransaction 
        }}>
            {Children}
        </TransactionContext.Provider>
    )
}
