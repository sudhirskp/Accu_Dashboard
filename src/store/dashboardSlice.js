import { createSlice } from '@reduxjs/toolkit'
import initial from '../data/initialData.json'

let nextWidgetId = 1000

const slice = createSlice({
  name: 'dashboard',
  initialState: {
    categories: initial.categories,
    searchQuery: ''
  },
  reducers: {
    addWidget(state, action){
      const { categoryId, name, text } = action.payload
      const cat = state.categories.find(c=>c.id===categoryId)
      if(cat){
        cat.widgets.push({ id: ++nextWidgetId, name, text })
      }
    },
    removeWidget(state, action){
      const { categoryId, widgetId } = action.payload
      const cat = state.categories.find(c=>c.id===categoryId)
      if(cat){
        cat.widgets = cat.widgets.filter(w=>w.id!==widgetId)
      }
    },
    setSearch(state, action){
      state.searchQuery = action.payload
    }
  }
})

export const { addWidget, removeWidget, setSearch } = slice.actions
export default slice.reducer
