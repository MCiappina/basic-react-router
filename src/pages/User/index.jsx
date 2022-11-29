import React from 'react'
import { useLocation } from 'react-router-dom'

export const User = () => {
  let location = useLocation()

  return (
    <div>Welcome to {location.pathname}</div>
  )
}
