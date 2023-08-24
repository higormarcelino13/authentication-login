import React, { useState } from 'react';
import { Container, TextField, Button, Grid, AppBar, Toolbar } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const CadastroScreen = () => {
  const [step, setStep] = useState(1);

  const stepSVGs = {
    1: '/svg/email1.svg',
    2: '/svg/celular.svg',
    3: '/svg/codigo.svg',
    4: '/svg/nome.svg',
    5: '/svg/cpf.svg',
    6: '/svg/endereco.svg',
    7: '/svg/email.svg',
    8: '/svg/cadastro.svg',
  };

  const nextStep = () => {
    if (step < 9) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
<Container maxWidth="md" style={{ marginTop: '-20px' }}>
      <AppBar position="static" style={{ backgroundColor: 'rgb(215, 56, 55)', width: '100%' }}>
    <Toolbar style={{ display: 'flex', justifyContent: 'center', padding: '0' }}>
      <img src="/path-to-your-logo.svg" alt="Logo" width="40" height="40" />
    </Toolbar>
  </AppBar>
      <Grid container spacing={0} justifyContent="flex-end" alignItems="center" style={{ height: '100vh' }}>
        <Grid item md={5} style={{ marginRight: '-200px' }}>
          <div style={{ padding: '20px', borderRadius: '8px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
              <img src={stepSVGs[step]} alt={`Step ${step} Icon`} width="300" height="200" />
            </div>
            {step === 1 && (
              <div>
                <TextField label="Email" variant="outlined" fullWidth style={{ marginTop: '10px' }} />
              </div>
            )}
            {step === 2 && (
              <div>
                <TextField label="Celular" variant="outlined" fullWidth style={{ marginTop: '10px' }} />
              </div>
            )}
            {step === 3 && (
              <div>
                <TextField label="Código de Validação" variant="outlined" fullWidth style={{ marginTop: '10px' }} />
              </div>
            )}
            {step === 4 && (
              <div>
                <TextField label="Nome Completo" variant="outlined" fullWidth style={{ marginTop: '10px' }} />
              </div>
            )}
            {step === 5 && (
              <div>
                <TextField label="CPF" variant="outlined" fullWidth style={{ marginTop: '10px' }} />
              </div>
            )}
            {step === 6 && (
              <div>
                <TextField label="Endereço" variant="outlined" fullWidth style={{ marginTop: '10px' }} />
              </div>
            )}
            {step === 7 && (
              <div>
                {/* Coloque o mapa aqui */}
              </div>
            )}
            {step === 8 && (
              <div>
                <Button variant="contained" color="secondary" fullWidth style={{ marginTop: '20px', backgroundColor: 'rgb(215, 56, 55)' }}>
                  Cadastrar
                </Button>
              </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
              {step !== 1 && (
                <ArrowBackIcon color="secondary" onClick={prevStep} />
              )}
              {step !== 8 && (
                <Button variant="contained" color="secondary" style={{ backgroundColor: 'rgb(215, 56, 55)' }} onClick={nextStep}>
                  Próximo
                </Button>
              )}
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CadastroScreen;
