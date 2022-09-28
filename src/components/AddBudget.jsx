import React, {useState} from "react";
import { Container, Stack, Button } from "react-bootstrap";
import BudgetCard from "./BudgetCard";
import AddBudgetModal from "./AddBudgetModal";
import {  useBudgets } from "../contexts/BudgetsProvider";

const AddBudget = () => {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const { budgets , expenses} = useBudgets()
  return (
  <>
    <Container className="my-4">
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto">Budgets</h1>
        <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>Add Budget</Button>
        <Button variant="outline-primary">Add Expense</Button>
      </Stack>
      <div 
      style={{
        display:"grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
        gap:"1rem", 
        alignItems:"Flex-start",
        }}
        >
          {budgets.map(budget => {
            return (
            <BudgetCard
            // name="Entertainment"
            // gray
            // amount={1200}
            // max={1000}
            key={budget.id} 
            // name={budget.name} 
            amount={0} 
            max={budget.max} 
             />
          )
        })}
         </div>
    </Container>
  <AddBudgetModal 
  show={showAddBudgetModal} 
  handleClose={()=> setShowAddBudgetModal(false) }/>
  </>
    
  );
};
export default AddBudget
