// src/components/TransactionList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link component
import './TransactionList.css';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch transactions from the backend or use dummy data
    const fetchedTransactions = [
      { id: 1, type: 'Income', amount: 5000, description: 'Salary' },
      { id: 2, type: 'Expense', amount: 200, description: 'Groceries' },
      { id: 3, type: 'Expense', amount: 150, description: 'Utilities' },
    ];
    setTransactions(fetchedTransactions);
  }, []);

  return (
    <div className="transaction-list">
      <header>
        <h1>Transaction List</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.type}</td>
                <td>${transaction.amount}</td>
                <td>{transaction.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default TransactionList;
