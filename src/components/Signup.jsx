import React from 'react'
import { useState } from 'react'

export const Signup = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [data, setData] = useState({
    "email": '',
    "password": '',
    "password_confirmation": ''
  });

  const baseURL = 'http://localhost:4000';


  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(data);
    try {
      const response = await fetch(`${baseURL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: data
        })
      })
      if(response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        const authorization = response.headers.get('authorization');
        console.log(authorization);
        setSuccess(responseData.status.message);
      } else {
        const errorData = await response.json();
        setError(errorData.status.message);
      }

    } catch(error) {
      setError(error.message);
      console.log(response.status.message)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    })

  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="email"
        value={data.email}
        name="email"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password"
        value={data.password}
        name="password"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password confirmation"
        value={data.password_confirmation}
        name="password_confirmation"
        onChange={handleChange}
      />
      <button type='submit'>Submit</button>
      <p>{success}</p>
      <p>{error}</p>
    </form>
  )
}
