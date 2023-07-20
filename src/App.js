import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import AllocationForm from './components/AllocationForm';
import Currency from './components/Currency';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
import ExpenseList from './components/ExpenseList';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <div className="d-inline-block" id = "heading" style={{width:'100%'}}>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <span style={{float:'right'}}  className="d-inline-block">
                        <Currency />
                    </span>
                </div>

                    <div className='row mt-3'>
                        {/* Add Budget component here under */}        
                     
                    <div className='col-sm'>
                        <Budget />
                    </div>
                        {/* Add Remaining component here under */}        
                    <div className='col-sm'>
                        <Remaining />
                    </div>
                        {/* Add ExpenseTotal component here under */}        
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>   
                    <h2 className='mt-3'>Allocation</h2>
                        {/* Add ExpenseList component here under */}         
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                        {/* Add ExpenseItem component here under */}        
                    <h2 className='mt-3'>Change Allocation</h2>
                        {/* Add AllocationForm component here under */}        
                    <div className='col-sm'>
                        <AllocationForm />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
