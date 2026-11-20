"use client";
import { useState } from 'react';
import { useExpense } from '../../context/ExpenseContext';
import ExpenseCard from '../../components/ExpenseCard';
import AddExpenseModal from '../../components/AddExpenseModal';
import ManageRoommatesModal from '../../components/ManageRoommatesModal'; 

export default function Dashboard() {
  const { expenses, balances, totalSpend } = useExpense();
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
  const [isPeopleModalOpen, setIsPeopleModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-fixed">
      <div className="min-h-screen bg-stone-100/80 backdrop-blur-md p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 mb-10 border-b border-stone-300">
            <div className="flex flex-wrap gap-6 text-center mb-6 md:mb-0">
              
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-200">
                <div className="text-3xl font-black text-stone-900">₹{totalSpend.toLocaleString()}</div>
                <div className="text-xs font-bold text-stone-500 uppercase tracking-widest mt-1">Total spend</div>
              </div>
              
              {balances.map((b) => (
                <div key={b.person} className="bg-white p-5 rounded-2xl shadow-sm border border-stone-200">
                  <div className={`text-3xl font-black ${b.balance >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                    {b.balance >= 0 ? '+' : ''}₹{Math.abs(b.balance).toFixed(0)}
                  </div>
                  <div className="text-xs font-bold text-stone-500 uppercase tracking-widest mt-1">{b.person}'s balance</div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-3 w-full md:w-auto">
              <button onClick={() => setIsPeopleModalOpen(true)} className="px-5 py-3 bg-white text-stone-800 border border-stone-200 text-sm font-bold rounded-xl hover:bg-stone-50 transition-colors shadow-sm flex-grow md:flex-grow-0">
                👥 Manage People
              </button>
              <button onClick={() => setIsExpenseModalOpen(true)} className="px-5 py-3 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-sm flex-grow md:flex-grow-0">
                + Log Expense
              </button>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-black text-stone-900">Recent expenses</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expenses.length === 0 ? (
              <p className="text-stone-800 text-sm font-bold bg-white p-4 rounded-xl shadow-sm inline-block">No expenses logged yet.</p>
            ) : (
              expenses.map(exp => <ExpenseCard key={exp.id} expense={exp} />)
            )}
          </div>
        </div>
      </div>

      {isExpenseModalOpen && <AddExpenseModal onClose={() => setIsExpenseModalOpen(false)} />}
      {isPeopleModalOpen && <ManageRoommatesModal onClose={() => setIsPeopleModalOpen(false)} />}
    </main>
  );
}