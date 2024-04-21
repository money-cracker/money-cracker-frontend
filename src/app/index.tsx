import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom'
import '../styles/globals.css'
import BottomTabNavigator from './components/BottomNavigator'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import { AuthContext, AuthProvider } from './context/AuthContext'
import { useContext } from 'react'
import LoginPage from './pages/LoginPage'

export const App = () => {
  const PrivateRoutes = () => {
    const { authenticated } = useContext(AuthContext)

    if (!authenticated) return <Navigate to="/login" replace />

    return <Outlet />
  }

  return (
    <BrowserRouter>
      <div className="App">
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Routes>
        </AuthProvider>
        <BottomTabNavigator />
      </div>
    </BrowserRouter>
  )
}
