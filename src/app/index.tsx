import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../styles/globals.css'
import BottomTabNavigator from './components/BottomNavigator'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <BottomTabNavigator />
      </div>
    </BrowserRouter>
  )
}
