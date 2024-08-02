import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthLayout from './layouts/Auth/AuthLayout'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import NoPage from './pages/nopage/NoPage'
import MainLayout from './layouts/Main/MainLayout'
import Home from './pages/home/Home'

function App() {

  return (
    <Routes>
      <Route path='/' element={<AuthLayout />}>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>

      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path='*' element={<NoPage />} />
    </Routes>
  )
}

export default App
