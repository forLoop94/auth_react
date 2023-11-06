import React from 'react'
import { Link } from 'react-router-dom'

export const Root = () => {
  return (
    <>
      <h1>Root</h1>
      <Link to='/login'>Log in</Link>
      <Link to='/signup'>Sign up</Link>
    </>
  )
}
