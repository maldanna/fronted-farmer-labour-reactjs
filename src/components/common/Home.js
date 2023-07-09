import React, { useEffect, useState } from 'react';
import { GetAccessToken } from './utility/AccessToken';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = GetAccessToken();
    // Check if the access token exists or has a valid value
    if (accessToken && accessToken !== '') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <div>
        <h1>Home Page !!</h1>
      </div>
      {isLoggedIn ? (
        <div className='User-Welcome'>Welcome, User!</div>
      ) : (
        <div className='User-Welcome'>Please log in to access this page.</div>
      )}
    </>
  );
};

export default Home;
