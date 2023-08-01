import React, { useContext, useState } from 'react';
import './DropDown.css';
import { AppContext } from '../context/AppContext';

const DropDownMenu = () => {
  const { currency, dispatch } = useContext(AppContext);
  const [selectedCurrency, setSelectedCurrency] = useState(currency);

  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedCurrency(selectedOption);

    // Extract only the currency symbol from the selected option
    const currencySymbol = selectedOption.split(' ')[0];

    // Dispatch an action to update the currency symbol in the AppContext
    dispatch({ type: 'CHG_CURRENCY', payload: currencySymbol });
  };

  return (
    <div>
      <select className="DropDown" id="currency" onChange={handleOptionChange} value={selectedCurrency}>
          <option value="" disabled>
            Select Currency
          </option>
          <option value="$ Dollar" className="DropDown">$ Dollar</option>
          <option value="£ Pound" className="DropDown">£ Pound</option>
          <option value="€ Euro" className="DropDown">€ Euro</option>
          <option value="₹ Ruppee" className="DropDown">₹ Ruppee</option>
      </select>
    </div>
  );
};

export default DropDownMenu;
