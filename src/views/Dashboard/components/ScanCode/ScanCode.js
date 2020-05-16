import React, { useEffect,useState } from 'react';
import QrReader from 'react-qr-reader';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Divider
} from '@material-ui/core';
import useScanCode from '../../../../hook/scancodehook';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  chartContainer: {
    position: 'relative',
    height: '300px'
  },
  stats: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  }
}));
const ScanCode = props => {
  const { className, ...rest } = props;
  const [customerEmail, setCusEmail] = useState(null);
  const [method, setMethod] = useState(null);

  const [{ verifyStatus, loading, error, purchasedStatus }, verifyCode, makePurchase] = useScanCode();
  const classes = useStyles();
  const theme = useTheme();
  const handleScan = data => {
    if (!data) {
      console.log("cannot detect url")
      return;
    }
    const dataArr = data.split("&email=");

    let verifyUrl = dataArr[0];
    const paramArr = dataArr[1].split("&method=");
    setCusEmail(paramArr[0]);
    setMethod(paramArr[1]);

    if (verifyUrl) {
      console.log(verifyUrl);
      verifyCode(verifyUrl);
    }
  }
  const handleError = err => {
    console.error(err)
  }

  useEffect(() => {
    if (verifyStatus) {
      console.log('verified');
      if (method == 'purchase') {
        makePurchase(customerEmail, 1);
      } else if (method == 'claim') {
        //todo
      }
    }
  }, [verifyStatus]); 

  return (
    <Card
      {...rest}
    >
      <CardHeader
        action={
          <IconButton size="small">
          </IconButton>
        }
        title="Scan QR Code"
      />
      <Divider />
      <CardContent>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '40%' }}
        />
      </CardContent>
    </Card>
  );
};

ScanCode.propTypes = {
  className: PropTypes.string
};

export default ScanCode;