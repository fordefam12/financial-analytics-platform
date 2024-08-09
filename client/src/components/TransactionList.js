import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TransactionList.css';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [newTransaction, setNewTransaction] = useState({ description: '', amount: '', type: 'Income' });

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/transactions');
      setTransactions(response.data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const addTransaction = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/transactions', newTransaction);
      setTransactions([...transactions, response.data]);
      setNewTransaction({ description: '', amount: '', type: 'Income' });
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/transactions/${id}`);
      setTransactions(transactions.filter(transaction => transaction._id !== id));
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

  return (
    <div className="transaction-list">
      <h2>Transactions</h2>
      <form onSubmit={addTransaction}>
        <input
          type="text"
          name="description"
          value={newTransaction.description}
          onChange={handleInputChange}
          placeholder="Description"
          required
        />
        <input
          type="number"
          name="amount"
          value={newTransaction.amount}
          onChange={handleInputChange}
          placeholder="Amount"
          required
        />
        <select name="type" value={newTransaction.type} onChange={handleInputChange}>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
        <button type="submit">Add Transaction</button>
      </form>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction._id}>
            {transaction.description} - ${transaction.amount} ({transaction.type})
            <button onClick={() => deleteTransaction(transaction._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
