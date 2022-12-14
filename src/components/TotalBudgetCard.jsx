import React from "react";
import {useBudgets } from "../contexts/BudgetsProvider";
import BudgetCard from "./BudgetCard";

const TotalBudgetCard = () => {
    const { expenses ,budgets } = useBudgets()
    const newAmount = expenses.reduce(
        (total, expense) => total + expense.amount, 0
    )
    const max = budgets.reduce(
        (total, budget) => total + budget.max, 0
    )
    if (max === 0) return null

    return < BudgetCard amount={newAmount} name="Total"  gray max={max} hideButtons />
}

export default TotalBudgetCard