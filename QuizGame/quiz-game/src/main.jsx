import React from 'react'
import ReactDOM from 'react-dom/client'
import { ResetStyled } from "./styles/reset"
import { RouterProvider } from "react-router-dom"
import { routes } from './routes'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { QuizProvider } from './context/quiz'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QuizProvider>
        <RouterProvider router={routes}/>
        <ResetStyled/>
      </QuizProvider>
    </ThemeProvider>
  // </React.StrictMode>,
)
