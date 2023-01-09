
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
import React,{useState} from 'react';
import ExpensesChart from './ExpensesChart';


const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState('2019');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
 
     
  var filteredExpenses = props.item.filter((expense) =>
  { return expense.date.getFullYear().toString() === filteredYear;});
  
  return (
    <div>
      
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
         <ExpensesChart expense={filteredExpenses} />
        <ExpenseList  items={filteredExpenses} />
        
  
    </div>
  );
};

export default Expense;