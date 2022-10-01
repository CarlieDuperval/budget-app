import React from "react"
// import { useState } from "react"
import { useContext } from "react"
import { v4 as uuidV4 } from "uuid" // to give a unique id to each budget 
import LocalStorage from "../hooks/LocalStorage"

const BudgetsContext = React.createContext()

export const UNCATEGORIZED_BUDGET_ID = "Uncategorized"

export const useBudgets = () => {
    return useContext(BudgetsContext)

}

export const BudgetsProvider = ({children }) => {
    const [budgets, setBudgets] = LocalStorage('budgets',[])
    const [expenses, setExpenses] = LocalStorage('expenses',[])


    const getBudgetExpenses = (budgetId) => {
        return expenses.filter(expense => expense.budgetId === budgetId)
    }
const addBudget = ({name, max}) => {
        setBudgets(previewBudgets => {
            // if the budget has the same name as a preview one 
            if(previewBudgets.find(budget => budget.name === name)){
                return previewBudgets
            }
            return [...previewBudgets, {id : uuidV4(), name, max }]
        })
        
    }
    const addExpense = ({description, amount, budgetId}) => {
        setExpenses(previewExpenses => {
            return [...previewExpenses, {id : uuidV4(), description, amount, budgetId}]
        })
        
    } 
    const deleteBudget = ({id}) => {
        setExpenses(previewExpenses => {
            return previewExpenses.map(expense =>{
                if (expense.budgetId !== id) return expense
                return {...expense, budgetId: UNCATEGORIZED_BUDGET_ID}
            })
        })
        setBudgets(previewBudgets => {
            return previewBudgets.filter(budget => budget.id !== id)

        })
    }
    const deleteExpense = ({id}) => {
        setExpenses(previewExpenses => {
            return previewExpenses.filter(expense => expense.id !== id)

        })

    }

    return (
    < BudgetsContext.Provider value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense

    }}
    > {children}
        </BudgetsContext.Provider>
        )
}