import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, TextField, Button, Grid } from '@mui/material';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { gapi } from 'gapi-script';
import './LoginScreen.css';

const LoginScreen = () => {
  const history = useHistory();
  const clientId = '231057203284-vmjdr09plm6e9oc6l5stggfalf75reup.apps.googleusercontent.com';
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    gapi.load('auth2', () => {
      gapi.auth2.init({ client_id: clientId });
    });
  }, [clientId]);

  const handleGoogleLoginSuccess = (response) => {
    console.log(response);

    const userData = {
      name: response.profileObj.name,
      email: response.profileObj.email,
      profilePicture: response.profileObj.imageUrl,
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoords({ latitude, longitude });

          console.log('Latitude:', latitude);
          console.log('Longitude:', longitude);

          history.push({
            pathname: '/LoginSucess',
            state: { user: userData, coords },
          });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      history.push({
        pathname: '/LoginSucess',
        state: { user: userData },
      });
    }
  };

  const handleGoogleLoginFailure = (response) => {
    console.log(response);
  };

  const handleFacebookLogin = (response) => {
    console.log(response);
  };

  const handleFacebookLoginFailure = (response) => {
    console.log(response);
  };

  const buttonStyle = {
    backgroundColor: 'rgb(215, 56, 55)',
    color: 'white',
    marginTop: '10px',
    padding: '10px 20px',
    borderRadius: '4px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
  };

  return (
    <div>
      <div className="login-screen-content">
        <Container maxWidth="xs">
          <Grid container spacing={2} justifyContent="center" alignItems="center" className="login-form-container">
            <Grid item xs={12}>
              <div style={{ padding: '20px', borderRadius: '8px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                  {/* ... */}
                </div>
                <h2 style={{ textAlign: 'center' }}>Login</h2>
                <TextField label="Email" variant="outlined" fullWidth />
                <TextField label="Senha" type="password" variant="outlined" fullWidth style={{ marginTop: '10px' }} />
                <Button variant="contained" color="secondary" fullWidth style={{ ...buttonStyle, marginTop: '20px' }}>
                  Login
                </Button>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                  <Link to="/cadastro" style={{ textDecoration: 'none', marginBottom: '10px', width: '100%' }}>
                    <Button variant="contained" color="secondary" style={buttonStyle}>
                      Criar uma conta
                    </Button>
                  </Link>
                  <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginBottom: '10px' }}>
                    <GoogleLogin
                      clientId={clientId}
                      onSuccess={handleGoogleLoginSuccess}
                      onFailure={handleGoogleLoginFailure}
                      buttonText="Google"
                    />
                    <div style={{ width: '10px' }} />
                    <FacebookLogin
                      clientId="13fb2f1e94f7c31e7746297793fd5ac6"
                      onSuccess={handleFacebookLogin}
                      onFailure={handleFacebookLoginFailure}
                      buttonText="Facebook"
                    />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default LoginScreen;
