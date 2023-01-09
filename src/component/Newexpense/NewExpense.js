import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const expenseDataHandler=(enteredExpensedata)=> {
    const expenseData = {
        ...enteredExpensedata,
        id: Math.random().toString()
    };  
    props.onAddexpenseData(expenseData);
  };
  return (
    <>
      <ExpenseForm onSaveExpensedata={expenseDataHandler}/>
    </>
  );
};

export default NewExpense;
