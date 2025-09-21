import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addWidget } from '../store/dashboardSlice'
import { FiX } from 'react-icons/fi'

const widgetTypes = [
  { id: 'cspm', label: 'CSPM' },
  { id: 'cwpp', label: 'CWPP' },
  { id: 'image', label: 'Image' },
  { id: 'ticket', label: 'Ticket' }
]



export default function AddWidgetModal({ category, onClose }) {
  const [widgetName, setWidgetName] = useState('')
  const [widgetText, setWidgetText] = useState('')
  const [selectedType, setSelectedType] = useState('cspm')
  const dispatch = useDispatch()

  const handleConfirm = () => {
    if (!widgetName.trim()) {
      alert('Please enter a widget name')
      return
    }
    
    if (!category || !category.id) {
      alert('Please select a category')
      return
    }

    const widgetData = {
      categoryId: category.id,
      name: widgetName.trim(),
      text: widgetText.trim()
    }
    
    console.log('Adding widget:', widgetData)
    dispatch(addWidget(widgetData))
    onClose()
  }

  return (
    <div className="fixed inset-0 overflow-hidden z-50">
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />
      
      <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
        <div className="w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Add Widget</h2>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <FiX className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {/* Description */}
              <div className="px-6 py-4">
                <p className="text-sm text-gray-600">
                  Personalise your dashboard by adding the following widget
                </p>
              </div>

              {/* Widget Type Selector */}
              <div className="px-6 flex gap-4 border-b border-gray-200 pb-4">
                {widgetTypes.map(type => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={
                      selectedType === type.id
                        ? 'px-4 py-2 rounded-lg text-sm font-medium bg-blue-100 text-blue-700'
                        : 'px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100'
                    }
                  >
                    {type.label}
                  </button>
                ))}
              </div>

              {/* Widget Form */}
              <div className="px-6 py-4 space-y-4">
                <div>
                  <label htmlFor="widgetName" className="block text-sm font-medium text-gray-700 mb-1">
                    Widget Name
                  </label>
                  <input
                    type="text"
                    id="widgetName"
                    value={widgetName}
                    onChange={(e) => setWidgetName(e.target.value)}
                    placeholder="Enter widget name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="widgetText" className="block text-sm font-medium text-gray-700 mb-1">
                    Widget Text
                  </label>
                  <textarea
                    id="widgetText"
                    value={widgetText}
                    onChange={(e) => setWidgetText(e.target.value)}
                    placeholder="Enter widget text or description"
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-blue-800 mb-2">Selected Type: {widgetTypes.find(t => t.id === selectedType)?.label}</h4>
                  <p className="text-sm text-blue-600">
                    This widget will be added to: {category?.name || 'Dashboard'}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-200">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                disabled={!widgetName.trim()}
                className={
                  !widgetName.trim()
                    ? 'px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg opacity-50 cursor-not-allowed'
                    : 'px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700'
                }
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
