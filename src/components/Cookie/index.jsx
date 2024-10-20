import { useState, useEffect } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { Cookie } from "@mui/icons-material";
import { styled } from '@mui/system';
import { ButtonAccept, ButtonReject } from "./index.js";
import CryptoJS from "crypto-js";

const SECRET_KEY = 'bolt'; 
export function CookieModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setOpen(true);
    }
  }, []);

  const getBrowserInfo = () => {
    const userAgent = navigator.userAgent;
    let browserName, browserVersion;

    if (userAgent.indexOf("Chrome") > -1) {
      browserName = "Chrome";
      browserVersion = userAgent.match(/Chrome\/(\d+\.\d+\.\d+\.\d+)/)[1];
    } else if (userAgent.indexOf("Firefox") > -1) {
      browserName = "Firefox";
      browserVersion = userAgent.match(/Firefox\/(\d+\.\d+)/)[1];
    } else if (userAgent.indexOf("Safari") > -1) {
      browserName = "Safari";
      browserVersion = userAgent.match(/Version\/(\d+\.\d+\.\d+)/)[1];
    } else {
      browserName = "Unknown";
      browserVersion = "Unknown";
    }

    return { browserName, browserVersion };
  };

  const getOSInfo = () => {
    const userAgent = navigator.userAgent;
    let osName = "Unknown";
    if (userAgent.indexOf("Win") > -1) osName = "Windows";
    else if (userAgent.indexOf("Mac") > -1) osName = "MacOS";
    else if (userAgent.indexOf("Linux") > -1) osName = "Linux";
    else if (userAgent.indexOf("Android") > -1) osName = "Android";
    else if (userAgent.indexOf("like Mac") > -1) osName = "iOS";

    return osName;
  };

  const handleAcceptCookies = () => {
    const userConsentInfo = {
      consentDate: new Date().toISOString(),
      acceptedCookies: true,
      browserInfo: getBrowserInfo(),
      osInfo: getOSInfo(),
      language: navigator.language || navigator.userLanguage,
    };

    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(userConsentInfo), SECRET_KEY).toString();
    localStorage.setItem('cookieConsent', encryptedData);
    setOpen(false);
  };

  const handleRejectCookies = () => {
    const userConsentInfo = {
      consentDate: new Date().toISOString(),
      acceptedCookies: false,
    };

    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(userConsentInfo), SECRET_KEY).toString();
    localStorage.setItem('cookieConsent', encryptedData);
    setOpen(false);
  };

  const decryptCookieConsent = () => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent) {
      const bytes = CryptoJS.AES.decrypt(cookieConsent, SECRET_KEY);
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
      return JSON.parse(decryptedData);
    }
    return null;
  };

  return (
    <StyledDialog
      open={open}
      onClose={handleAcceptCookies}
      fullWidth
      maxWidth="xl"
    >
      <DialogTitle color="white">
        <Cookie style={{ marginRight: '8px', verticalAlign: 'middle' }} />
        Este site usa cookies
      </DialogTitle>
      <StyledDialogContent>
        <Typography color="white">
          Utilizamos cookies para personalizar conteúdo, fornecer recursos de mídia social e analisar nosso tráfego.
          Esses cookies nos ajudam a entender como você interage com o nosso site, permitindo que melhoremos sua
          experiência de navegação.
        </Typography>
        <Typography variant="body2" color="white" sx={{ marginTop: 1 }}>
          Você pode optar por aceitar ou recusar o uso de cookies neste site.
        </Typography>
      </StyledDialogContent>
      <StyledDialogActions>
        <ButtonAccept onClick={handleAcceptCookies} color="primary" variant="contained">
          Aceitar Cookies
        </ButtonAccept>
        <ButtonReject onClick={handleRejectCookies} color="secondary" variant="outlined">
          Recusar Cookies
        </ButtonReject>
      </StyledDialogActions>
    </StyledDialog>
  );
}

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    position: 'fixed',
    bottom: 0,
    margin: 0,
    borderRadius: '10px 10px 0 0',
    width: '100%',
    maxWidth: '600px',
    boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#000',
    maxHeight: '300px',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      maxHeight: '250px',
    },
  },
}));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(2),
  overflowY: 'auto',
  maxHeight: '200px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
}));

const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  justifyContent: 'space-between',
  padding: theme.spacing(1, 2),
  flexDirection: 'row',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));
