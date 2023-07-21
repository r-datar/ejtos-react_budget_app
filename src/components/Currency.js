import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    
    const { dispatch, currency,currencyList } = useContext(AppContext);
    
     const setCurrency = (currencyVal) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currencyVal,
        });
    }    
    return (
        <div className='custom-select alert alert-success'>
            <span id="currency">Currency:
                <select
                        id='currencyVal'
                        name='currencyVal'
                        onChange={(event) => setCurrency(event.target.value)} defaultValue={currency}>

                {currencyList.map((curr) => (
                    <option value={curr.symbol} key={curr.name} >
                        {curr.symbol} {curr.name}
                    </option>))}            
                </select>

            </span>
        </div>
    );
};
export default Currency;