import React, { ChangeEvent, useContext, useEffect, useState } from 'react'

import { useQuery } from 'react-query'
import Marquee from 'react-fast-marquee'

import { Button, Checkbox, Menu, Switch } from '@mui/material'

import { ReactComponent as SettingIcon } from './assets/images/setting.svg'
import { ToDoContext, ToDoItemType } from './context/TodoContext'
import { ToDoItem } from './components/ToDoItem/ToDoItem'
import { useStyles } from './AppStyles'
import { getNews } from './services/serviceApi'

const todayTasks: ToDoItemType[] = [
  {
    id: 1,
    label: 'Visit David',
    description: 'Lorem Ipsum Dolor Sit met',
    done: false,
    priority: 1,
  },
  {
    id: 2,
    label: 'Goceries For Dinner',
    description: 'Lorem Ipsum Dolor Sit met',
    done: false,
    priority: 2,
  },
  {
    id: 3,
    label: 'Fix Dad’s iPad',
    description: 'Lorem Ipsum Dolor Sit met text for example wrap text',
    done: true,
    priority: 3,
  },
]

export const App = () => {
  const { classes } = useStyles()
  const toDoContext = useContext(ToDoContext)

  const [isShowTodayTasks, setIsShowTodayTasks] = useState<boolean>(true)
  const [isShowNews, setIsShowNews] = useState<boolean>(false)
  const [newsLineContent, setNewsLineContent] = useState<string>('')
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const { isLoading, data } = useQuery('api', async () => (await getNews()).json())

  useEffect(() => {
    if (toDoContext) {
      toDoContext.setToDoList(todayTasks)
    }
  }, [])

  useEffect(() => {
    if (data?.articles) {
      setNewsLineContent(data.articles[0].content)
    }
  }, [isLoading])

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setIsShowTodayTasks(checked)
  }

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setIsShowNews(checked)
  }

  return (
    <div className={classes.root}>
      <div className={classes.app}>
        <div className={classes.header}>
          <div className={classes.appName}>To Do</div>
          <div className={classes.setting}>
            <Button
              aria-controls={open ? 'demo-positioned-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={handleMenuClick}
            >
              <SettingIcon />
            </Button>
            <Menu
              className={classes.menu}
              aria-labelledby='demo-positioned-button'
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <div className={classes.newsSwitcher}>
                <span>Show news line</span>
                <Switch className={classes.switch} checked={isShowNews} onChange={handleOnChange} />
              </div>
            </Menu>
          </div>
        </div>
        <div className={classes.todayTasks}>
          <Checkbox
            className={classes.checkbox}
            checked={isShowTodayTasks}
            onChange={handleCheckboxChange}
          />
          <span className={classes.label}>Today Tasks:</span>
        </div>
        {isShowTodayTasks && (
          <div className={classes.tasksContainer}>
            {toDoContext?.toDoList.map((item) => (
              <ToDoItem
                id={item.id}
                label={item.label}
                description={item.description}
                done={item.done}
                priority={item.priority}
                key={item.id}
              />
            ))}
          </div>
        )}
        {isShowNews && (
          <Marquee className={classes.marquee} gradient={false} direction={'left'}>
            <div className={classes.newsLine}>{newsLineContent}</div>
          </Marquee>
        )}
      </div>
    </div>
  )
}
