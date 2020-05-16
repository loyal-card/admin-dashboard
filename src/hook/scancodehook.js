import { useState } from 'react';

const useScanCode = () => {

  const [verifyStatus, setVerifyStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [purchasedStatus, setPurchasedStatus] = useState(false);

  const makePurchase = async (email, amount) => {
    setLoading(true);
    setError(false);

    try {
      const response = await fetch(`http://localhost:5000/api/customers/purchase`, {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          amount: amount
        }),
        headers: {
          'Content-Type': 'application/json',
        }
      })
      if (response.status == 200) {
        setPurchasedStatus(true);

      }

    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

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
      if (response.statusText === "OK") {
        setVerifyStatus(true);
      }

    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  return [{ verifyStatus, loading, error, purchasedStatus}, verifyCode, makePurchase];
};

export default useScanCode;