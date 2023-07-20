import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, maxBudget,expenses } = useContext(AppContext);
    const budgetval = Number(budget);
    
   
     const setBudgetval = (budgetval) => {
       if(budgetval >= maxBudget) {
            alert("The value cannot exceed max budget  £"+maxBudget);
            //setBudget("");
            return;
        }
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
    
        if(budgetval < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            //setBudget("");
            return;
        }
        dispatch({
            type: 'ADD_BUDGET',
            payload: budgetval,
        });
    }    
    return (
        <div className='alert alert-secondary' style={{'whiteSpace': 'nowrap'}}>
            <span id="budgetval">Budget: £ 
                <input
                        required='required'
                        type='number'
                        id='budgetval'
                        defaultValue= {budgetval}
                        style={{size: 6}}
                        step='10'
                        onBlur={(event) => setBudgetval(event.target.value)}>
                </input>

            
            
            </span>
        </div>
    );
};
export default Budget;