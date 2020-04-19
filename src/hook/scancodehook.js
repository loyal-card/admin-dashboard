import { useState } from 'react';

const useScanCode = () => {
   
    const [verifyStatus, setVerifyStatus] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const verifyCode = async (verifyCodeUrl) => {
      setLoading(true);
      setError(false);

      try {
        const response = await fetch(verifyCodeUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        let result = await response.json();
        console.log(result)
        setVerifyStatus(result == 'OK');
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };   
    return [{ verifyStatus, loading, error }, verifyCode];
};

export default useScanCode;