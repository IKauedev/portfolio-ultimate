import { useState, useEffect } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { Cookie } from "@mui/icons-material";
import { styled } from '@mui/system';
import { Button } from "./index.js";

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

    localStorage.setItem('cookieConsent', JSON.stringify(userConsentInfo));
    setOpen(false);
  };

  const handleRejectCookies = () => {
    const userConsentInfo = {
      consentDate: new Date().toISOString(),
      acceptedCookies: false,
    };

    localStorage.setItem('cookieConsent', JSON.stringify(userConsentInfo));
    setOpen(false);
  };

  return (
    <StyledDialog
      open={open}
      onClose={handleAcceptCookies}
      fullWidth
      maxWidth="xl"
    >
      <DialogTitle>
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
        <Button onClick={handleAcceptCookies} color="primary" variant="contained">
          Aceitar Cookies
        </Button>
        <Button onClick={handleRejectCookies} color="secondary" variant="outlined">
          Recusar Cookies
        </Button>
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
    boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#000',
    maxHeight: '250px',
  },
}));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(2),
  overflow: 'hidden',
}));

const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  justifyContent: 'space-between',
  padding: theme.spacing(1, 2),
}));
