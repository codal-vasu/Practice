import './Expenseitem.css';
import React from 'react';
import ExpenseDate from './ExpenseDate';

function Expenseitem(props)
{   
    
    
    return(
        <div className='container'>
        <div className="expense-item">
        <div className='expense-item-date'><ExpenseDate date={props.date} /></div>

            <div className="expense-item-description"><h2 >{props.title}</h2></div>
            <div className="expense-amount"><h5 id="cl">${props.amount}</h5></div>
        </div>
        </div>
    )
}

export default Expenseitem;