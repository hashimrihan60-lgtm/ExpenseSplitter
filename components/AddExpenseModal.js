"use client";
import { useState } from 'react';
import { useExpense } from '../context/ExpenseContext';

export default function AddExpenseModal({ onClose }) {
  const { addExpense, roommates } = useExpense();
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [paidBy, setPaidBy] = useState(roommates[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;
    
    addExpense({
      title,
      amount: parseFloat(amount),
      paidBy,
      date: new Date().toISOString().split('T')[0]
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 md:p-8 rounded-2xl w-full max-w-md shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-stone-800">Add New Expense</h2>
          <button onClick={onClose} className="text-stone-400 hover:text-stone-600 font-bold text-xl">
            ✕
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-1.5">Description</label>
            <input 
              type="text" 
              value={title} 
              onChange={e => setTitle(e.target.value)} 
              // The text-stone-900 and bg-white classes ensure the text is dark and visible
              className="w-full border-2 border-stone-200 rounded-lg p-3 text-stone-900 bg-white focus:border-blue-500 focus:ring-2 outline-none" 
              placeholder="e.g., Groceries" 
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-1.5">Amount (₹)</label>
            <input 
              type="number" 
              value={amount} 
              onChange={e => setAmount(e.target.value)} 
              className="w-full border-2 border-stone-200 rounded-lg p-3 text-stone-900 bg-white focus:border-blue-500 focus:ring-2 outline-none" 
              placeholder="0.00" 
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-1.5">Paid By</label>
            <select 
              value={paidBy} 
              onChange={e => setPaidBy(e.target.value)} 
              className="w-full border-2 border-stone-200 rounded-lg p-3 text-stone-900 bg-white focus:border-blue-500 focus:ring-2 outline-none appearance-none"
            >
              {roommates.map(person => <option key={person} value={person}>{person}</option>)}
            </select>
          </div>
          
          <div className="flex justify-end gap-3 mt-8">
            <button 
              type="button" 
              onClick={onClose} 
              className="px-5 py-2.5 text-stone-600 hover:bg-stone-100 rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium shadow-sm hover:bg-blue-700 transition-colors"
            >
              Save Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}