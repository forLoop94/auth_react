import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../styles/root.module.css';

export const Root = () => {

  const navigate = useNavigate()
  const baseURL = 'http://localhost:4000';
  const token = localStorage.getItem('token');


  const handleSignOut = async() => {
    try {
      const response = await fetch(`${baseURL}/logout`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJjZDMwZDY3MC1jMDk0LTRhNzctOTRmYS00NzQ0MjNhNDZlMGIiLCJzdWIiOiIxMyIsInNjcCI6InVzZXIiLCJhdWQiOm51bGwsImlhdCI6MTY5OTMxMTIxNCwiZXhwIjoxNjk5MzEzMDE0fQ.2LVBfCXZWqmaXLaZ4mKPBtqp07_3ncAeIHlV4M_1KvA",
        }
      })

      console.log(localStorage.getItem('token'));

      if(response.ok) {
        const resData = await response.json();
        console.log(resData.message);
        localStorage.removeItem('token');
        navigate("/login")
      } else {
        const resData = await response.json()
        console.log(resData.message);
      }

    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

    return (
      <>
        <h1>Root</h1>
        <nav>
          <Link to='/login'>Log in</Link>
          <Link to='/signup'>Sign up</Link>
          <button onClick={handleSignOut}>Log out</button>
        </nav>
      </>
    );
}
