import React, {useState} from 'react';
import './App.css';
import AddBudget from './components/AddBudget';
// import AddBudgetModal from './components/AddBudgetModal';


const App = () => {
  // const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)

  return( 
    <>
  < AddBudget />
  {/* <AddBudgetModal show={showAddBudgetModal} handleClose={()=> setShowAddBudgetModal(false) }/> */}
  </>
  )
}

export default App;
