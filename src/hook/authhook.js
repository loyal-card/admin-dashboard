import { useState } from 'react';

const useAuth = () => {
    const expiredTimeStamp = window.localStorage.getItem('expiresIn');
    const INITIAL_AUTHENTICATED_STATUS = expiredTimeStamp && expiredTimeStamp - new Date().getTime() / 1000 > 0;
    const [authenticated, setAuthenticated] = useState(INITIAL_AUTHENTICATED_STATUS);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const checkAuthentication = async (userName, password) => {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch('http://localhost:5000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              username: userName,
              password: password
          }),
        });
        let result = await response.json();
        let expiredTimeStamp = new Date().getTime() / 1000 + result.expiresIn;
        window.localStorage.setItem('expiresIn', expiredTimeStamp);
        window.localStorage.setItem('token', result.token);
        setAuthenticated(result.token != null);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
  
    return [{ authenticated, loading, error }, checkAuthentication];
};

export default useAuth;