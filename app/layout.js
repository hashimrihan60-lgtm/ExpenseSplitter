import { ExpenseProvider } from '../context/ExpenseContext';
import Navbar from '../components/Navbar';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#FCFBF9] text-stone-900 font-sans selection:bg-blue-100">
        <ExpenseProvider>
          <Navbar />
          {children}
        </ExpenseProvider>
      </body>
    </html>
  );
}