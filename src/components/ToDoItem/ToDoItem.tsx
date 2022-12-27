import { Switch } from '@mui/material'
import React from 'react'
import { ToDoItemType } from '../../context/TodoContext'

import { useStyles } from './ToDoItemStyles'

export const ToDoItem: React.FC<ToDoItemType> = ({ id, label, description, done, priority }) => {
  const { classes } = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes[`priority${priority}`]}></div>
      <div className={classes.info}>
        <div>{label}</div>
        <div className={classes.description}>{description}</div>
      </div>
      <Switch className={classes.switch} defaultChecked={done} />
    </div>
  )
}
