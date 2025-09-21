import React from 'react';
import { FiSettings } from 'react-icons/fi';
import SearchBar from './SearchBar';

export default function Header() {
	return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-lg border-b">
      {/* Left: Title & Breadcrumb */}
      <div className="flex flex-col">
        <span className="text-xs text-gray-400 font-medium tracking-wide mb-1">Home &gt; <span className="text-blue-700 font-semibold">Dashboard</span></span>
        <h1 className="text-2xl font-bold text-blue-900 tracking-tight">Dashboard V2</h1>
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 flex justify-center px-8">
        <SearchBar />
      </div>			{/* Right: Settings & User */}
			<div className="flex items-center gap-6">
				<button className="p-2 rounded-full hover:bg-blue-50 transition-colors">
					<FiSettings className="text-blue-600 text-xl" />
				</button>
				<div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-md border-2 border-white">
					{/* Placeholder for user avatar initial */}
					U
				</div>
			</div>
		</header>
	);
}