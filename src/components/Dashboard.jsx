import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Category from './Category'
import AddWidgetModal from './AddWidgetModal'



export default function Dashboard({ onAddWidget }){
  const categories = useSelector(s => s.dashboard.categories)
  const searchQuery = useSelector(s => s.dashboard.searchQuery)

  return (
    <div>
      <div className="grid gap-6">
        {categories.map(cat=>(
          <Category 
            key={cat.id} 
            category={cat} 
            openAddModal={() => onAddWidget(cat)} 
            search={searchQuery}
          />
        ))}
      </div>
    </div>
  )
}
