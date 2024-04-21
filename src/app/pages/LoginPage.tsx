import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../../hook/useLocalStorage'

const LoginPage = () => {
  const { setAuthenticated } = useContext(AuthContext)
  const [storedValue, setValue] = useLocalStorage('user', '')
  const [loginId, setLoginId] = useState('')
  const [password, setPassword] = useState('')
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
      <div>
        <div className="text-4xl font-semibold">Money Cracker</div>
      </div>
      <div className="mt-20">
        <div className="mb-4">
          <input
            className="px-2 py-1 bg-transparent border border-neutral-300 focus:border-primary text-sm placeholder-neutral-300"
            placeholder="Enter Login Id"
            value={loginId}
            onChange={(e) => {
              setLoginId(e.target.value)
            }}
          />
        </div>
        <div className="mb-4">
          <input
            className="px-2 py-1 bg-transparent border border-neutral-300 focus:border-primary text-sm placeholder-neutral-300"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </div>
        <button
          className="px-4 py-1 rounded-sm bg-primary"
          onClick={() => handleLogin()}
        >
          <span className="text-sm font-medium text-white">Login</span>
        </button>
      </div>
    </div>
  )
}

export default LoginPage
