import Expense from './component/Expense';
import './component/Expenseitem.css';
import NewExpense from './component/Newexpense/NewExpense';
import React,{useState} from 'react';

function App() {

  const Dummy_Data = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2022, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2020, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2019, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2020, 5, 12),
    },
    {
      id: 'e5',
      title: 'New Desk (Wooden)',
      amount: 400,
      date: new Date(2020, 6, 6),
    },
    {
      id: 'e6',
      title: 'New Desk (Wooden)',
      amount: 500,
      date: new Date(2020, 4, 12),
    },
    {
      id: 'e7',
      title: 'New Desk (Wooden)',
      amount: 300,
      date: new Date(2020, 3, 12),
    },
    {
      id: 'e8',
      title: 'New Desk (Wooden)',
      amount: 900,
      date: new Date(2020, 7, 12),
    },
    {
      id: 'e9',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2020, 8, 12),
    },
  ];

  const [expenses, setExpenses]=useState(Dummy_Data);
  const addExpenseHandler=expense=>{
    setExpenses((prevExpenses) => {
      return [...prevExpenses , expense ];
    });
  };

  return (
    <div className='app'>
      <NewExpense onAddexpenseData={addExpenseHandler} />
      <Expense item={expenses} />
    </div>
  );
}

export default App;
