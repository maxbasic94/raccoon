import React, { createContext, Dispatch, useState } from 'react'

export type ToDoItemType = {
  id: number
  label: string
  description: string
  done: boolean
  priority: 1 | 2 | 3 | 4
}

type ToDoContextType = {
  toDoList: ToDoItemType[]
  setToDoList: Dispatch<React.SetStateAction<ToDoItemType[]>>
}

interface ToDoContextProviderProps {
  children: React.ReactNode
}

export const ToDoContext = createContext<ToDoContextType | null>(null)

export const ToDoContextProvider = ({ children }: ToDoContextProviderProps) => {
  const [toDoList, setToDoList] = useState<ToDoItemType[]>([])

  return <ToDoContext.Provider value={{ toDoList, setToDoList }}>{children}</ToDoContext.Provider>
}
