import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MaterialUILink from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

export default function Login() {

  return (
    <div>
    <Container component="main" maxWidth="sm" style={{marginTop: '50px'}}>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
      <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
       <Button variant="contained" fullWidth color="secondary" target="_blank">
       <Link to="/Info" style={{textDecoration: "none", color: "white"}}>
                                   Sign In
       </Link>
</Button>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            style={{float: 'left'}}
          />
           <Grid container>
            <Grid item xs>
              <MaterialUILink href="#" variant="body2" style={{float: 'left'}}>
                Forgot password?
              </MaterialUILink>
            </Grid>
            <Grid item>
              <MaterialUILink href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </MaterialUILink>
            </Grid>
          </Grid>
      </Container>
    </div>
  );
}
