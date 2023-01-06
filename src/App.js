import Expense from './component/Expense';
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
      <NewExpense  />
      <Expense item={expenses} />
    </div>
  );
}

export default App;
