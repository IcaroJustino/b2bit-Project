import { Routes, Route } from 'react-router-dom'
import './index.css'
import LoginPage from './pages/login'
import NotFoundPage from './pages/404'
import UserPage from './pages/UserPage'


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path='/user' element={<UserPage />} />
    </Routes>
  )
}