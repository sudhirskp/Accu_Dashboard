import React from 'react';
import Widget from './Widget';

export default function Category({ category, openAddModal, search }) {
const widgets = search
? category.widgets.filter(w => (w.name + ' ' + w.text).toLowerCase().includes(search.toLowerCase()))
    : category.widgets;

return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          {category.name}
          <span className="text-sm font-normal text-gray-500">({widgets.length} widgets)</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {widgets.map(w => (
          <Widget key={w.id} widget={w} categoryId={category.id} />
        ))}
        
        <button
          onClick={openAddModal}
          className="group border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center p-6 h-full min-h-[200px] hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-200"
        >
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-colors duration-200">
            <span className="text-2xl text-blue-600 group-hover:text-blue-700">+</span>
          </div>
          <span className="text-sm font-medium text-gray-600 group-hover:text-blue-600">Add Widget</span>
        </button>
      </div>
    </div>
  );
}

