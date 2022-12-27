import React from 'react'

import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'

import './index.css'
import { App } from './App'
import { ToDoContextProvider } from './context/TodoContext'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ToDoContextProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ToDoContextProvider>
  </React.StrictMode>,
)
