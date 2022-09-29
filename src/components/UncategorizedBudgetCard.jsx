import React from "react";
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../contexts/BudgetsProvider";
import BudgetCard from "./BudgetCard";

const UncategorizedBudgetCard = (props) => {
    const { getBudgetExpenses } = useBudgets()
    const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce(
        (total, expense)=> total + expense.amount, 0)
        if(amount === 0) return null

    return(
        <>
        <BudgetCard  amount={amount} name="Uncategorized" gray {...props}/>
        
        
        </>
    )

}

export default UncategorizedBudgetCard