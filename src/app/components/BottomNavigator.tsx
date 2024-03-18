import React from 'react'
import { Link } from 'react-router-dom'
import { PhosphorIcon } from './common/atoms/PhosphorIcon'

const BottomTabNavigator = () => {
  return (
    <div className="tab-navigator">
      <Link className="flex-1 flex flex-col justify-center items-center" to="/">
        <PhosphorIcon name="House" />
      </Link>
      <Link
        className="flex-1 flex flex-col justify-center items-center"
        to="/profile"
      >
        <PhosphorIcon name="User" />
      </Link>
    </div>
  )
}

export default BottomTabNavigator
