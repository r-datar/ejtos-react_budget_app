import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    
    const { dispatch, currency } = useContext(AppContext);
    
     const setCurrency = (currencyVal) => {
       
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currencyVal,
        });
    }    
    return (
        <div className='alert alert-secondary' style={{'whiteSpace': 'nowrap'}}>
            <span id="currency">Currency:
                <select
                        id='currencyVal'
                        name='currencyVal'
                        onChange={(event) => setCurrency(event.target.value)}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
                </select>

            
            
            </span>
        </div>
    );
};
export default Currency;