import './App.css'

import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './pages/Layouts/MainLayout/MainLayout'
import { LandingPage } from './pages/LandingPage/LandingPage'


function App() {
  return (
      <>
        <Routes>
          <Route path='/' element={ <MainLayout /> } >
            <Route index element={ <LandingPage /> } />
          </Route>
        </Routes>
      </>
  )
}

export default App
