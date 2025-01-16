import {
  expenseAmount,
  expenseList,
  form,
  expenseName,
  totalExpenses,
} from "./domElements.js";

const expenses = [];

const renderList = () => {
  expenseList.innerHTML = "";
  expenses.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - ${item.amount}`;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => removeExpense(index));
    listItem.appendChild(deleteBtn);
    deleteBtn.classList.add("btn", "btn-danger", "mx-3");
    expenseList.appendChild(listItem);
  });
};

const calculateTotalExpenses = () => {
  const total = expenses.reduce((sum, item) => sum + item.amount, 0);
  totalExpenses.textContent = `Total: ${total} PLN`;
};

const removeExpense = (index) => {
  expenses.splice(index, 1);
  renderList();
  calculateTotalExpenses();
};

const handleAddExpense = (e) => {
  e.preventDefault();
  const singleExpense = {
    name: expenseName.value,
    amount: Number(expenseAmount.value),
  };
  expenses.push(singleExpense);
  renderList();
  calculateTotalExpenses();
  form.reset();
  console.log(expenses);
};

form.addEventListener("submit", handleAddExpense);
