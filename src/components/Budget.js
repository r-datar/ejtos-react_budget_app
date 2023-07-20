import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = (props) => {
    const { budget, remaining,maxBudget } = useContext(AppContext);
    const budgetval = Number(budget);
    
   
     const setBudgetval = (budgetval) => {
       if(budgetval >= maxBudget) {
            alert("The value cannot exceed max budget  £"+maxBudget);
            //setBudget("");
            return;
        }
        const spentSoFar = budget - remaining;
        if(budgetval < spentSoFar) {
            alert("You cannot reduce the budget value lower than the spending");
            //setBudget("");
            return;
        }
    }    
    return (
        <div className='alert alert-secondary' style={{'white-space': 'nowrap'}}>
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