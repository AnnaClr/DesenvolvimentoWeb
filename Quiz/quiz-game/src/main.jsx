import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { ResetStyled } from "./styles/reset"
import { routes } from './routes'
import { RouterProvider } from "react-router-dom"
//import { QuizProvider } from './context/quiz'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
      <ThemeProvider theme={theme}>
        {/* <QuizProvider> */}
          <RouterProvider router={routes}/>
          <ResetStyled/>
        {/* </QuizProvider> */}
    </ThemeProvider>
  // </React.StrictMode>,
 
)
