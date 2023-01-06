import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm=(props)=>{
    const [eventTitle, setEventTitle] = useState('');
    const [eventAmount, setEventAmount]= useState('');
    const [eventDate, setEventDate]=useState('');
    const TitleChangeHandler=(event)=>{
        setEventTitle(event.target.value);
    };
    const AmountChangeHandler=(event)=>{
        setEventAmount(event.target.value);
    };
    const DateChangeHandler=(event)=>{
        setEventDate(event.target.value);
    };
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:eventTitle,
            amount:eventAmount,
            Date:new Date(eventDate),
        };     
          
         console.log(expenseData);
        setEventTitle('');
        setEventAmount('');
        setEventDate('');
    }
    return(
        <>
        <form onSubmit={submitHandler}>
        <div className='expense-form'>
            <div className='expense-form'>
            <label>Title: </label>
            <input onChange={TitleChangeHandler} value={eventTitle} type='text' />
            </div>
            <div className='expense-form'>
            <label>Amount: </label>
            <input onChange={AmountChangeHandler} value={eventAmount} type='number' min='0.01' step='0.01'/>
            </div>
            <div className='expense-form'>
            <label>Date: </label>
            <input onChange={DateChangeHandler} value={eventDate} type='date' min="2019-01-01" max="2024-01-21"/>
            </div>
            <div className='expense-form'>
                <button type='submit' className='btn'>Add Expense</button>
            </div>
        </div>
        </form>
    </>
    );
};

export default ExpenseForm;