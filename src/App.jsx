import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AddWidgetModal from './components/AddWidgetModal';
import store from './store/store';


export default function App(){
  const [isAddWidgetOpen, setIsAddWidgetOpen] = React.useState(false)
  const [selectedCategory, setSelectedCategory] = React.useState(null)

  const openAddWidget = (category) => {
    // If no category is provided, get the first category from the store
    if (!category) {
      const state = store.getState();
      category = state.dashboard.categories[0];
    }
    setSelectedCategory(category)
    setIsAddWidgetOpen(true)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header/>
      <div className="sticky top-0 z-10 backdrop-blur-sm bg-white/80 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-4">
            <h1 className="text-xl font-semibold text-gray-900">CNAPP Dashboard</h1>
            <div className="flex flex-wrap items-center gap-3">
              <button 
                onClick={() => openAddWidget()}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                <span className="mr-1">+</span> Add Widget
              </button>
              <button 
                className="inline-flex items-center px-3 py-2 border border-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200"
                onClick={() => window.location.reload()}
              >
                <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Refresh
              </button>
              <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Last 2 days</option>
                <option>Last 7 days</option>
                <option>Last 30 days</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Dashboard onAddWidget={openAddWidget}/>
      </main>

      {isAddWidgetOpen && (
        <AddWidgetModal
          category={selectedCategory}
          onClose={() => setIsAddWidgetOpen(false)}
        />
      )}
    </div>
  )
}