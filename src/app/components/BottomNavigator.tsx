import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PhosphorIcon } from './common/atoms/PhosphorIcon'

const BottomTabNavigator = () => {
  const location = useLocation()
  const isActive = (path: string) => location.pathname === path
  if (
    location.pathname === '/login' ||
    location.pathname === '/profile/setup'
  ) {
    return <></>
  }
  return (
    <div className="tab-navigator">
      <Link
        to="/"
        className="flex-1 flex flex-col justify-center items-center h-full active:scale-90"
      >
        <PhosphorIcon
          name="House"
          weight={isActive('/home') ? 'bold' : 'regular'}
        />
      </Link>
      <Link
        to="/profile"
        className="flex-1 flex flex-col justify-center items-center h-full active:scale-90"
      >
        <PhosphorIcon
          name="User"
          weight={isActive('/profile') ? 'bold' : 'regular'}
        />
      </Link>
    </div>
  )
}

export default BottomTabNavigator
