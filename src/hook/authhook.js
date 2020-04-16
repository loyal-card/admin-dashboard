import { useState } from 'react';

const useAuth = () => {
    const expiredTimeStamp = window.localStorage.getItem('expiresIn');
    const INITIAL_AUTHENTICATED_STATUS = expiredTimeStamp && expiredTimeStamp - new Date().getTime() / 1000 > 0;
    const [authenticated, setAuthenticated] = useState(INITIAL_AUTHENTICATED_STATUS);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const checkAuthentication = async (userName, password) => {
      setLoading(true);
      try {
        const result = await fetch('http://localhost:5000/api/checkAuthentication', {
          method: 'POST',
          body: {
              userName: userName,
              password: password,
          },
        });
        
        let expiredTimeStamp = new Date().getTime() / 1000 + result.expiresIn;
        window.localStorage.setItem('expiresIn', expiredTimeStamp);
        window.localStorage.setItem('token', result.token);

        setAuthenticated(result.token != null);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
  
    return [{ authenticated, loading, error }, checkAuthentication];
};

export default useAuth;