
import React, { useState, useRef, useEffect } from 'react';
import IconGoogleDrive from './icons/IconGoogleDrive';
import IconInstagram from './icons/IconInstagram';

interface HeaderProps {
    onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-2">
                         <IconGoogleDrive className="w-8 h-8" />
                         <span className="text-xl font-bold text-gray-400 dark:text-gray-500">&rarr;</span>
                         <IconInstagram className="w-8 h-8" />
                        <span className="text-xl font-bold text-gray-800 dark:text-white ml-2">InstaDrive Scheduler</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <nav className="hidden md:flex space-x-4">
                            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-purple dark:hover:text-brand-yellow rounded-md">Dashboard</a>
                            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-purple dark:hover:text-brand-yellow rounded-md">Analytics</a>
                            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-purple dark:hover:text-brand-yellow rounded-md">Settings</a>
                        </nav>
                        <div className="relative" ref={dropdownRef}>
                            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple rounded-full">
                                <img className="h-8 w-8 rounded-full" src="https://picsum.photos/100" alt="User avatar" />
                                <span className="hidden md:inline text-sm font-medium text-gray-700 dark:text-gray-300">Jane Doe</span>
                                <svg className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {dropdownOpen && (
                                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 animate-fade-in">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Your Profile</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Settings</a>
                                    <a href="#" onClick={onLogout} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Sign out</a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
