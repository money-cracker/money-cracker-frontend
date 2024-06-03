import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../../hook/useLocalStorage'
import { Button } from '../components/common/atoms/Button/Button'

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
        <div className="text-3xl font-semibold font-press">Money Cracker</div>
      </div>
      <div className="mt-20">
        <div className="mb-6 flex items-center">
          <input
            className="rounded-none w-full px-2 py-1 bg-transparent border-b border-neutral-300 focus:border-primary text-base placeholder-neutral-300 caret-secondary"
            placeholder="Enter Login Id"
            value={loginId}
            onChange={(e) => {
              setLoginId(e.target.value)
            }}
          />
        </div>
        <div>
          <input
            className="rounded-none w-full px-2 py-1 bg-transparent border-b border-neutral-300 focus:border-primary text-base placeholder-neutral-300 caret-secondary"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </div>
      </div>
      <div className="mt-16">
        <Button
          className="py-3 rounded"
          onClick={() => handleLogin()}
          width={'100%'}
        >
          Login
        </Button>

        <div className="flex justify-center">
          <Button
            className="rounded-t py-2 mt-3"
            variant="text"
            onClick={() => handleLogin()}
            width={120}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
