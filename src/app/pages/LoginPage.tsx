import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../../hook/useLocalStorage'

const LoginPage = () => {
  const { setAuthenticated } = useContext(AuthContext)
  const [storedValue, setValue] = useLocalStorage('user', '')
  const navigate = useNavigate()

  const handleLogin = () => {
    setAuthenticated(true)
    setValue('mock user token!')
    navigate('/')
  }

  useEffect(() => {
    if (storedValue && storedValue !== '') {
      setAuthenticated(true)
      navigate('/')
    }
  }, [])
  return (
    <div className="page">
      <div className="text-xl">login page</div>
      <button onClick={() => handleLogin()}>click to login</button>
    </div>
  )
}

export default LoginPage
