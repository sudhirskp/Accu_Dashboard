import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearch } from '../store/dashboardSlice'
import { FiSearch } from 'react-icons/fi'

export default function SearchBar(){
  const dispatch = useDispatch()
  const q = useSelector(s=>s.dashboard.searchQuery)
  return (
    <div className="relative w-full max-w-md">
      <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 text-lg" />
      <input 
        type="text"
        className="w-full border border-gray-200 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700 shadow-sm bg-gray-50"
        placeholder="Search widgets..." 
        value={q} 
        onChange={e=>dispatch(setSearch(e.target.value))}
      />
    </div>
  )
}
