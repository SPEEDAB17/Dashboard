import { useState } from 'react';
import { Bell, Search, Menu, X } from 'lucide-react';

interface HeaderProps {
    onMenuClick: () => void;
    isSidebarOpen: boolean;
}

export default function Header({ onMenuClick, isSidebarOpen }: HeaderProps) {
  const [isSearchOpen, setSearchOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm">
        <div className="flex items-center">
            <button onClick={onMenuClick} className="mr-4 text-gray-500 md:hidden">
                {isSidebarOpen ? <X /> : <Menu />}
            </button>
            <h1 className={`text-2xl font-bold text-gray-900 ${isSearchOpen ? 'hidden sm:block' : 'block'}`}>Dashboard</h1>
        </div>
      <div className="flex items-center flex-1 ml-4 sm:justify-end sm:flex-none">
        <div className={`relative w-full sm:w-48 ${isSearchOpen ? 'w-full' : 'w-auto'}`}>
            <button onClick={() => setSearchOpen(!isSearchOpen)} className="absolute text-gray-400 -translate-y-1/2 top-1/2 left-3 sm:hidden">
                <Search size={20}/>
            </button>
            <Search className="absolute hidden text-gray-400 -translate-y-1/2 top-1/2 left-3 sm:block" size={20}/>
            <input 
                type="text" 
                placeholder="Search..." 
                className={`w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white ${isSearchOpen ? 'block' : 'hidden sm:block'}`}
            />
        </div>
        <div className={`flex items-center space-x-2 sm:space-x-4 ml-2 ${isSearchOpen ? 'hidden sm:flex' : 'flex'}`}>
            <button className="relative p-2 text-gray-500 rounded-full hover:bg-gray-100">
                <Bell />
                <span className="absolute top-1 right-1 block w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
            </button>
            <img src="https://i.pravatar.cc/150?img=3" alt="User avatar" className="w-10 h-10 rounded-full"/>
        </div>
      </div>
    </header>
  );
}
