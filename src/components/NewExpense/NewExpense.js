import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [editing, setEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setEditing(false);
  };

  const starEditingHandler = () => {
    setEditing(true);
  };
  const stopEditingHandler = () => {
    setEditing(false);
  };

  return (
    <div className="new-expense">
      {!editing && (
        <button onClick={starEditingHandler}>Add New Expense</button>
      )}
      {editing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
