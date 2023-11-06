import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/root.module.css';

export const Root = () => {
  return (
    <>
      <h1>Root</h1>
      <nav>
        <Link to='/login'>Log in</Link>
        <Link to='/signup'>Sign up</Link>
      </nav>
    </>
  )
}
