import { useState } from 'react';

const useScanCode = () => {
   
    const [verifyStatus, setVerifyStatus] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [customerEmail, setCusEmail] = useState(null);
    const verifyCode = async (verifyCodeUrl) => {
      //verifyCodeUrl: localhost:5000/api/code/verify-code?code=430987&email=coco@gmail.com
      // const arrRes = verifyCodeUrl.split("&");
      // setCusEmail(arrRes[1].substr(6));
      setLoading(true);
      setError(false);

      try {
        //这里应该是 `http://localhost:5000/api/code/verify-code?code=***`,
        const response = await fetch(verifyCodeUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if(response.statusText==="OK"){
          setVerifyStatus(true);
        }
        
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };   
    return [{ verifyStatus, loading, error,customerEmail }, verifyCode];
};

export default useScanCode;