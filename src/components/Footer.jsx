import React from 'react';
import { Home, PlusSquare, RefreshCcw } from "lucide-react";

const Footer = ({ activeTab = 'home', onTabChange }) => {
  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: Home,
    },
    {
      id: 'piapps',
      label: 'Pi Apps',
      icon: PlusSquare,
    },
    {
      id: 'services',
      label: 'Services',
      icon: RefreshCcw,
    },
  ];

  const handleTabClick = (tabId) => {
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-md mx-auto px-4 py-3">
        <nav className="flex justify-between items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`flex flex-col items-center justify-center space-y-1 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-purple-50 ${
                  isActive 
                    ? 'text-purple-600' 
                    : 'text-gray-500 hover:text-purple-500'
                }`}
              >
                <Icon 
                  size={24} 
                  className={`transition-all duration-200 ${
                    isActive ? 'text-purple-600' : 'text-gray-500'
                  }`}
                />
                <span 
                  className={`text-xs font-medium transition-all duration-200 ${
                    isActive ? 'text-purple-600' : 'text-gray-500'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
