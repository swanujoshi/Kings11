import React, { useState } from 'react';
import { ArrowLeft, HelpCircle, Download, Trophy, DollarSign } from 'lucide-react';
import './App.css'; // Fixed import path for plain CSS

interface Transaction {
  id: string;
  type: 'Entry Paid' | 'Offer Applied' | 'Winnings' | 'Entry Refund';
  date: string;
  time: string;
  match: string;
  amount: number;
}

const mockTransactions: Transaction[] = [
  { id: '1', type: 'Entry Paid', date: '25 May 2022', time: '9:53 am', match: 'LKN vs BLR', amount: -49 },
  { id: '2', type: 'Offer Applied', date: '25 May 2022', time: '4:25 am', match: 'CSK vs MI', amount: 25 },
  { id: '3', type: 'Winnings', date: '19 May 2022', time: '10:26 am', match: 'GT vs LSG', amount: 31.84 },
  { id: '4', type: 'Entry Paid', date: '19 May 2022', time: '4:25 am', match: 'CSK vs MI', amount: -25 },
  { id: '5', type: 'Entry Refund', date: '18 May 2022', time: '2:30 pm', match: 'RCB vs SRH', amount: 30 },
];

const tabs = ['Matches', 'Contests', 'Team Creation', 'Profile'];
const filters = ['Entry Paid', 'Entry Refund', 'Offer Details', 'Winning'];

export default function TransactionHistory() {
  const [activeTab, setActiveTab] = useState('Matches');
  const [activeFilter, setActiveFilter] = useState('Entry Paid');

  const getTransactionIcon = (type: Transaction['type']) => {
    switch (type) {
      case 'Winnings':
        return <Trophy className="w-5 h-5 text-green-500" />;
      case 'Entry Refund':
        return <DollarSign className="w-5 h-5 text-blue-500" />;
      default:
        return <DollarSign className="w-5 h-5" />;
    }
  };

  return (
    <div className="container">
      <header className="header bg-[#1242C1] text-white shadow-lg p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <ArrowLeft className="w-6 h-6 cursor-pointer" />
          <h1 className="headerTitle font-bold text-lg">Fantasy Sports</h1>
        </div>
        <div className="headerIcons flex gap-4">
          <Download className="w-6 h-6 cursor-pointer" />
          <HelpCircle className="w-6 h-6 cursor-pointer" />
        </div>
      </header>

      <nav className="tabs flex space-x-4 border-b p-4 bg-gray-50">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab px-4 py-2 rounded-full ${activeTab === tab ? 'bg-[#1242C1] text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      <div className="filters flex gap-2 p-4 bg-gray-50">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filterChip px-4 py-2 rounded-full ${activeFilter === filter ? 'bg-[#1242C1] text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="transactionList p-4">
        {mockTransactions.reduce((acc: JSX.Element[], transaction, index, array) => {
          if (index === 0 || transaction.date !== array[index - 1].date) {
            acc.push(
              <h2 key={`date-${transaction.date}`} className="dateHeader text-lg font-semibold my-4">
                {transaction.date}
              </h2>
            );
          }
          acc.push(
            <div key={transaction.id} className="transaction flex items-center justify-between p-4 shadow rounded-lg bg-white mb-4">
              <div className="transactionIcon flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
                {getTransactionIcon(transaction.type)}
              </div>
              <div className="transactionDetails flex-1 ml-4">
                <div className="transactionType font-medium text-gray-800">{transaction.type}</div>
                <div className="transactionMeta text-sm text-gray-500">
                  {transaction.time} | {transaction.match}
                </div>
              </div>
              <div className={`transactionAmount font-medium ${transaction.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {transaction.amount > 0 ? '+' : ''} ₹{Math.abs(transaction.amount)}
              </div>
            </div>
          );
          return acc;
        }, [])}
      </div>
    </div>
  );
}
