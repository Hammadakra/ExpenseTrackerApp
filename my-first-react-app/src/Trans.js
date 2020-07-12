import {createContext} from 'react'

const initialTransaction=[

    {amount : 500, desc: 'Case'},
    {amount : 40, desc: "IT"},
    {amount : -30 ,desc: "Educaton"}
]

export const TransactionContext = createContext(initialTransactionS);