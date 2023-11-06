import React from 'react'
import { useState } from 'react'

export const Login = () => {
  const [data, setData] = useState({
    'email': '',
    'password': ''
  })

  const baseURL = "http://localhost:4000";

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${baseURL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: data
        })
      })
      if(res.ok) {
        const resData = await res.json()
        console.log(resData);
        const authorization = response.headers.get('authorization');
        localStorage.setItem('token', JSON.stringify(authorization));
        console.log(resData.message)
      } else {
        const resData = await res.json()
        console.log(resData.message);
      }
    } catch(error) {
      return error;
    }
  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='email'
        placeholder='email'
        name='email'
        onChange={handleChange}
      />
      <input
        type='password'
        placeholder='password'
        name='password'
        onChange={handleChange}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}
