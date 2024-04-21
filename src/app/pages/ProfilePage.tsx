import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../../hook/useLocalStorage'

const ProfilePage = () => {
  const { setAuthenticated } = useContext(AuthContext)
  const navigate = useNavigate()

  const [storedValue, setValue] = useLocalStorage('user', '')

  const handleLogout = () => {
    setValue('')
    setAuthenticated(false)
    navigate('/login')
  }
  return (
    <div className="page">
      <div className="text-xl">Profile Page</div>
      <div>your token now: {storedValue}</div>
      <button onClick={() => handleLogout()}>click to logout!</button>
    </div>
  )
}

export default ProfilePage
