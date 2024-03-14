import React from 'react'
import { Link } from 'react-router-dom'

const BottomTabNavigator = () => {
  return (
    <div className="tab-navigator">
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
    </div>
  )
}

export default BottomTabNavigator
