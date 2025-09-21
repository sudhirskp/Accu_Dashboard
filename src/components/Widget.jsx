import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../store/dashboardSlice';
import DonutChart from './DonutChart';

export default function Widget({ widget, categoryId }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-base font-semibold text-gray-800 mb-2">{widget.name}</h3>
          <p className="text-sm text-gray-600">{widget.text}</p>
        </div>
        <button
          className="p-1.5 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-200 ml-4"
          onClick={() => dispatch(removeWidget({ categoryId, widgetId: widget.id }))}
        >
          ✖
        </button>
      </div>

      {widget.type === 'chart' && widget.chartType === 'donut' && (
        <div className="flex items-center justify-center p-4">
          <DonutChart data={widget.data} labels={widget.labels} />
        </div>
      )}

      {widget.type === 'empty' && (
        <div className="flex flex-col items-center justify-center py-8 px-4 bg-gray-50 rounded-lg">
          <svg className="w-12 h-12 text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
          <p className="text-sm text-gray-500 text-center">No graph data available</p>
        </div>
      )}

      {widget.type === 'bar' && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500"
              style={{ width: `${widget.value}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs mt-2 text-gray-600">
            <span>Low</span>
            <span>High</span>
          </div>
          <p className="text-sm font-medium text-gray-700 mt-3">
            Total: {widget.total}
          </p>
        </div>
      )}
    </div>
  );
}

