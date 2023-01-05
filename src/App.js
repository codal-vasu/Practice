

import Expenseitem from './component/Expenseitem';
import './component/Expenseitem.css';
import NewExpense from './component/Newexpense/NewExpense';

function App() {

  const expenses = [
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
      date: new Date(2018, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2017, 5, 12),
    },
  ];
  return (
    <div className='app'>
      
      <Expenseitem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <Expenseitem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <Expenseitem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
      <Expenseitem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
      <NewExpense title={"1212121"}/>
    </div>
  );
}

export default App;