import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    body: 'sans-serif',
  },
  styles: {
    global: {
      body: {
        background: '#282a36',
        color: '#f8f8f2',
      },
    },
  },
})
