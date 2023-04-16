import * as React from 'react';
import { Button, Grid, Grow, TextField, Slide} from '@mui/material'
import { Link } from 'react-router-dom';


export default function Login() {
  const minRowSpacing = 0;
  const expandedRowSpacing = 3;
  const [rowSpacing, setSpacing] = React.useState(minRowSpacing);
  const [login, showLogin] = React.useState(false);
  const loginContainerRef = React.useRef(null);

  const displayLogin = () => {
    showLogin((prev) => !prev)
    setSpacing((current) => current === minRowSpacing ? expandedRowSpacing : minRowSpacing);
  }

  return (
    <Grid container columns={12} rowSpacing={rowSpacing} columnSpacing={3} alignContent={'center'} minHeight="100vh">
      <Grid item xs={12} align="center">
        {!login ? <Button variant="contained" onClick={displayLogin}>member sign in</Button> : null}
      </Grid>
      <Grid item xs={6} align="right" >
        <Grow in={login}>
          <TextField required label="Username"/>
        </Grow>
        
      </Grid>
      <Grid item xs={6} align="left">
        <Grow in={login} style={{transformOrigin: '0 0 0'}} {...(login ? { timeout: 1000 } : {})}>
          <TextField required label="Password"/>
        </Grow>
      </Grid>
      <Grid item xs={5} />
      <Grid item xs={2} justifyContent={'center'} align="center" ref={loginContainerRef}>
        {!login ? 
        <Button variant="contained" id='proceedButton'>continue as guest</Button> : 
        <Slide direction='right' in={login} container={loginContainerRef.current}>
          <Button variant="contained" id='proceedButton'>Login</Button>
        </Slide> 
        }
      </Grid>
      <Grid item xs={5} />
      <Grid item xs={12} align="center">
        {!login? null : 
        <Slide direction="right" in={login} container={loginContainerRef.current}>
          <Button variant="text" size='small'>continue as guest</Button>
        </Slide>
        }
      </Grid>
    </Grid>
  );
}