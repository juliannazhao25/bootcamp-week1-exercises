import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import NavBar from './Components/NavBar'
import MainPage from './Containers/MainPage'
import Greeting from './Containers/Greeting'
// import COMPONENT from 'FILEPATH'

const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <BrowserRouter basename="personal-assistant">
        <NavBar />
        <Switch>
          <Route path="/todo">
            <MainPage />
          </Route>
          <Route path="/">
            <Greeting />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  </ThemeProvider>
)

export default App
