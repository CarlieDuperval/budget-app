import React from 'react';
import './App.css';
import AddBudget from './components/AddBudget';
import AddBudgetModal from './components/AddBudgetModal';


const App = () => {
  return( 
    <>
  < AddBudget />
  <AddBudgetModal show/>
  </>
  )
}

export default App;
