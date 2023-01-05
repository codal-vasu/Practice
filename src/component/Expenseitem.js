import './Expenseitem.css';
import React,{useState} from 'react';
function Expenseitem(props)
{   
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});
    const year = props.date.getFullYear();
    const [title, setTitle] = useState(props.title);
    const clickHandler=()=>{
        setTitle('Title Update!');
        console.log(title);
    };
    
    return(
        <div className="expense-item">
            <div className="expense-date">
                <div id="month">{month}</div>
                <div id ="year">{year}</div>
                <div id ="day">{day}</div>
            </div>
            <div className="expense-item-description"><h2 >{title}</h2></div>
            <div className="expense-amount"><h5 id="cl">${props.amount}</h5></div>
            <span><button onClick={clickHandler}>Change Title</button></span>
        </div>
    )
}

export default Expenseitem;