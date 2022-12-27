import { makeStyles } from 'tss-react/mui'
import {
  bgPrimary,
  bgSecondary,
  blue,
  green,
  shadow,
  textPrimary,
  white,
} from './assets/styles/colors'

export const useStyles = makeStyles()({
  root: {
    background: bgPrimary,
    height: '100vh',
  },
  app: {
    display: 'flex',
    flexDirection: 'column',
    background: bgSecondary,
    height: '100%',
    maxWidth: 600,
    margin: 'auto',
    padding: '13px 20px 0 20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 17px',
  },
  appName: {
    fontFamily: 'Actor',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 36,
    color: textPrimary,
  },
  setting: {},
  todayTasks: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 17,
  },
  checkbox: {
    color: white,
    '&.Mui-checked': {
      color: white,
    },
  },
  label: {
    fontFamily: 'Abhaya Libre SemiBold',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 24,
    color: textPrimary,
  },
  tasksContainer: {
    boxShadow: shadow,
    borderRadius: 40,
    color: textPrimary,
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 16,
  },
  menu: {
    '& .MuiList-root': {
      boxShadow: shadow,
      background: bgSecondary,
      border: '2px solid',
      borderColor: white,
      padding: 10,
    },
  },
  newsSwitcher: {
    color: textPrimary,
    background: bgSecondary,
    boxShadow: shadow,
  },
  switch: {
    '& .MuiSwitch-thumb': {
      backgroundColor: white,
    },
    '& .MuiSwitch-track': {
      backgroundColor: blue,
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: green,
    },
  },
  marquee: {
    position: 'fixed',
    bottom: 25,
  },
  newsLine: {
    color: white,
  },
})
