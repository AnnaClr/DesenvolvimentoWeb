import React from 'react'
import ReactDOM from 'react-dom/client'
// import { App } from './App/index'
import { ResetStyled } from "./styles/reset"
import { RouterProvider } from "react-router-dom"
import { routes } from './routes'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <ThemeProvider theme={theme}>
    {/* <App /> */}
     <RouterProvider router={routes}/>
     <ResetStyled/>
    </ThemeProvider>
  // </React.StrictMode>,
)
