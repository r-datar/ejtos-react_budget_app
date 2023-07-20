import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = (props) => {
    const { budget, remaining, totalExpenses  } = useContext(AppContext);
    const budgetval = Number(budget);
    const maxBudget = 20000
   // const [setBudgetval] = useState('');

     const setBudgetval = (budgetval) => {
console.log(totalExpenses);
       if(budgetval >= maxBudget) {
            alert("The value cannot exceed max budget  £"+maxBudget);
            //setBudget("");
            return;
        }
        if(budgetval < totalExpenses) {
            alert("The value cannot be lower than the spending");
            //setBudget("");
            return;
        }
    }    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}
            <input
                        required='required'
                        type='number'
                        id='budgetval'
                        defaultValue= {budgetval}
                        style={{ marginLeft: '2rem' , size: 10}}
                        step='10'
                        onChange={(event) => setBudgetval(event.target.value)}>
            </input>

            
            
            </span>
        </div>
    );
};
export default Budget;