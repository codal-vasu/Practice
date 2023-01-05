import React from 'react';

const ExpenseForm=()=>{
    return(
        <>
        <form>
        <div className='expense-form'>
            <div className='expense-form'>
            <label>Title</label>
            <input type='text' />
            </div>
            <div className='expense-form'>
            <label>Amount</label>
            <input type='number' min='0.01' step='0.01'/>
            </div>
            <div className='expense-form'>
            <label>Date</label>
            <input type='date' min="2019-01-01" max="2024-01-21"/>
            </div>
            <div className='expense-form'>
                <button type='submit'>Add Expense +</button>
            </div>
        </div>
        </form>
    </>
    );
};

export default ExpenseForm;