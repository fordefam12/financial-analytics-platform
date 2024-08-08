import React from 'react';
import { Link } from 'react-router-dom';
import AnalyticsChart from './AnalyticsChart';
import './Dashboard.css';

const Dashboard = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Income',
        data: [5000, 6000, 7000, 8000, 9000, 10000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Expenses',
        data: [2000, 3000, 4000, 5000, 6000, 7000],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Financial Overview',
      },
    },
  };

  return (
    <div className="dashboard">
      <header>
        <h1>Financial Analytics Dashboard</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/transactions">Transactions</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="analytics">
          <h2>Analytics Overview</h2>
          <div className="analytics-cards">
            <div className="card">
              <h3>Total Income</h3>
              <p>$50,000</p>
            </div>
            <div className="card">
              <h3>Total Expenses</h3>
              <p>$30,000</p>
            </div>
            <div className="card">
              <h3>Net Savings</h3>
              <p>$20,000</p>
            </div>
          </div>
          <AnalyticsChart data={data} options={options} />
        </section>
        <section className="recent-transactions">
          <h2>Recent Transactions</h2>
          <ul>
            <li>Income: $5,000 - Salary</li>
            <li>Expense: $200 - Groceries</li>
            <li>Expense: $150 - Utilities</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
