
import Expenseitem from './Expenseitem';

function Expense(props){
  
    return(
        <>
          {props && props.item.map((expenses)=>(<Expenseitem title= {expenses.title} amount={expenses.amount} date={expenses.date} />))};  
        </>
    );
};

export default Expense;