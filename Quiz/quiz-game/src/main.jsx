import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { ResetStyled } from "./styles/reset"
import { routes } from './routes'
import { RouterProvider } from "react-router-dom"


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
      <ThemeProvider theme={theme}>
          <RouterProvider router={routes}/>
          <ResetStyled/>
    </ThemeProvider>
  // </React.StrictMode>,
 
)
