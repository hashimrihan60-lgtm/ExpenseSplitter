export default function ExpenseCard({ expense }) {
  const dateObj = new Date(expense.date);
  const formattedDate = dateObj.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });

  // Dynamically choose an image based on keywords in the expense title
  const getExpenseImage = (title) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('grocer') || lowerTitle.includes('food') || lowerTitle.includes('pizza')) {
      return "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=200&q=80"; // Groceries
    } else if (lowerTitle.includes('electric') || lowerTitle.includes('power') || lowerTitle.includes('utility')) {
      return "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=200&q=80"; // Electricity
    } else if (lowerTitle.includes('rent') || lowerTitle.includes('house')) {
      return "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=200&q=80"; // House/Rent
    } else if (lowerTitle.includes('wifi') || lowerTitle.includes('internet')) {
      return "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=200&q=80"; // Router/Network
    } else {
      // Default expense image for all other items
      return "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=200&q=80";
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-md border border-stone-200 shadow-sm rounded-2xl p-4 flex items-center gap-4 hover:shadow-md transition-all">
      
      {/* Dynamic Expense Thumbnail */}
      <img
        src={getExpenseImage(expense.title)}
        alt={expense.title}
        className="w-14 h-14 rounded-xl object-cover shadow-sm border border-stone-100"
      />

      {/* Expense Details (Fixed text visibility) */}
      <div className="flex-grow">
        <h3 className="font-bold text-stone-900 text-lg leading-tight">{expense.title}</h3>
        <p className="text-sm text-stone-600 font-medium mt-1">
          Paid by <span className="text-blue-600 font-bold">{expense.paidBy}</span> on {formattedDate}
        </p>
      </div>

      {/* Amount */}
      <div className="text-xl font-extrabold text-stone-900">
        ₹{expense.amount.toLocaleString()}
      </div>
      
    </div>
  );
}