import { makeStyles } from 'tss-react/mui'
import { yellow, blue, grey, red, green, white } from '../../assets/styles/colors'

export const useStyles = makeStyles()({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priority1: {
    height: '100%',
    borderLeft: '6px solid',
    borderColor: red,
    marginRight: 14,
  },
  priority2: {
    height: '100%',
    borderLeft: '6px solid',
    borderColor: blue,
    marginRight: 14,
  },
  priority3: {
    height: '100%',
    borderLeft: '6px solid',
    borderColor: yellow,
    marginRight: 14,
  },
  priority4: {
    height: '100%',
    borderLeft: '6px solid',
    borderColor: grey,
    marginRight: 14,
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
  description: {
    width: '100%',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflowX: 'hidden',
  },
  info: {
    overflow: 'auto',
    width: '100%',
  },
})
