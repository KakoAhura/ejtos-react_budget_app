import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch, expenses,currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const totalExpenses = expenses.reduce((total, item) => {
      return (total += item.cost);
  }, 0);
  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setNewBudget(value);
  };

  const handleBlur = () => {
    if (newBudget < totalExpenses) {
        alert(`You can't reduce the Budget below what you have already spent (${currency}${totalExpenses})`);
        setNewBudget(budget); 
    } else if (newBudget > 20000) {
        alert(`The value cannot exceed (${currency}) 20000`);
        setNewBudget(budget); // Reset newBudget to the current budget value
      } else {
        dispatch({ type: 'SET_BUDGET', payload: newBudget });
      }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleBlur();
    }
  };

  return (
    <div className='alert alert-secondary'>
      <span>Budget: {currency}</span>
      <input
        required
        type="number"
        id="budget"
        value={newBudget}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        max={20000} // Replace 20000 with your desired upper limit value
      />
    </div>
  );
};

export default Budget;
