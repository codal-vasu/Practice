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
        const expenseData= {
            title:eventTitle,
            amount:eventAmount,
            date :new Date(eventDate),
        };     
        
        props.onSaveExpensedata(expenseData);
        setEventTitle('');
        setEventAmount('');
        setEventDate('');
    }
    return(
        <>
        <form onSubmit={submitHandler}>
        <div className='expense-form'>
            <div className='expense-form-item'>
            <label>Title: </label>
            <input onChange={TitleChangeHandler} value={eventTitle} type='text' />
            </div>
            <div className='expense-form-item'>
            <label>Amount: </label>
            <input onChange={AmountChangeHandler} value={eventAmount} type='number' min='0.01' step='0.01'/>
            </div>
            <div className='expense-form-item'>
            <label>Date: </label>
            <input onChange={DateChangeHandler} value={eventDate} type='date' />
            </div>
            <div className='expense-form-item'>
                <button type='submit' className='btn'>Add Expense</button>
            </div>
        </div>
        </form>
    </>
    );
};

export default ExpenseForm;