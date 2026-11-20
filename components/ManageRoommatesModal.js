"use client";
import { useState } from 'react';
import { useExpense } from '../context/ExpenseContext';

export default function ManageRoommatesModal({ onClose }) {
  const { roommates, addRoommate, removeRoommate, editRoommate } = useExpense();
  const [newName, setNewName] = useState('');
  const [editingName, setEditingName] = useState(null);
  const [editInput, setEditInput] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (newName.trim()) {
      addRoommate(newName.trim());
      setNewName('');
    }
  };

  const startEditing = (name) => {
    setEditingName(name);
    setEditInput(name);
  };

  const saveEdit = () => {
    if (editInput.trim() && editInput.trim() !== editingName) {
      editRoommate(editingName, editInput.trim());
    }
    setEditingName(null);
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 md:p-8 rounded-2xl w-full max-w-md shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-stone-800">Manage Roommates</h2>
          <button onClick={onClose} className="text-stone-400 hover:text-stone-600 font-bold text-xl">✕</button>
        </div>

        {/* List of current roommates */}
        <div className="space-y-3 mb-6 max-h-60 overflow-y-auto pr-2">
          {roommates.map((person) => (
            <div key={person} className="flex items-center justify-between bg-stone-50 p-3 rounded-lg border border-stone-200">
              {editingName === person ? (
                <input 
                  type="text" 
                  value={editInput}
                  onChange={(e) => setEditInput(e.target.value)}
                  className="bg-white border border-blue-500 rounded px-2 py-1 text-sm text-stone-900 outline-none flex-grow mr-2"
                  autoFocus
                />
              ) : (
                <span className="font-medium text-stone-800">{person}</span>
              )}
              
              <div className="flex gap-2">
                {editingName === person ? (
                   <button onClick={saveEdit} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-bold">Save</button>
                ) : (
                   <button onClick={() => startEditing(person)} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded font-bold">Edit</button>
                )}
                <button onClick={() => removeRoommate(person)} className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded font-bold">Remove</button>
              </div>
            </div>
          ))}
        </div>

        {/* Add new roommate form */}
        <form onSubmit={handleAdd} className="flex gap-2 border-t pt-6">
          <input 
            type="text" 
            value={newName} 
            onChange={(e) => setNewName(e.target.value)} 
            placeholder="Add new person..." 
            className="flex-grow border-2 border-stone-200 rounded-lg p-2.5 text-stone-900 bg-white focus:border-blue-500 outline-none text-sm"
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-blue-700 text-sm shadow-sm">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}