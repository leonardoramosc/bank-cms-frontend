import { Paper, TextField, Button, CircularProgress, makeStyles } from '@material-ui/core';
import { ChangeEvent, SyntheticEvent, useState } from 'react';

import { InputTypes } from './sign-in.component.types';

import './sign-in.component.styles.css';

const useStyles = makeStyles((theme) => ({
  center: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  wrapper: {
    position: 'relative',
    maxWidth: '300px',
    padding: '40px',
  },
  input: {
    width: '100%',
    marginBottom: `${theme.spacing(2)}px`
  },
  submitBtn: {
    width: '100%',
    color: '#ffffff',
    backgroundColor: `${theme.palette.primary.main}`,
    '&:hover': {
      backgroundColor: '#ffffff',
      borderColor: `${theme.palette.primary.main}`,
      color: `${theme.palette.primary.main}`
    }
  }
}));

const SignInComponent = () => {

  const classes = useStyles();

  const [inputs, setInputs] = useState<InputTypes>({username: '', password: ''});
  const [incorrectUser, setIncorrectUser] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    checkUserAndPassword(inputs);

    console.log(inputs)
  };

  const checkUserAndPassword = (inputs: InputTypes) => {

    setLoading(true);

    setTimeout(() => {
      const user = {
        username: 'leorrc',
        password: '12345'
      }

      console.log('quqlq')
  
      const correctUser = inputs.username === user.username;
      const correctPassword = inputs.password === user.password;
  
      if (!correctUser || !correctPassword) {
        setIncorrectUser(true);
      } else {
        setIncorrectUser(false);
      }

      setLoading(false);
    }, 2000);

    
  }

  const handleInputChange = (input: 'username' | 'password') => {

    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const newInputValue = event.currentTarget.value;

      setInputs({
        ...inputs,
        [input]: newInputValue
      })
    }
  }

  return (
    <Paper elevation={3} className={`${classes.wrapper} ${classes.center}`}>
      <form
        name="form"
        className="login-form"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >

        { 
          loading && 
          <span style={{position: 'absolute'}} className={classes.center}>
            <CircularProgress />
          </span>
        }
        
        <TextField
          error={incorrectUser}
          id="outlined-error-helper-text"
          variant="outlined"
          placeholder="Usuario"
          className={classes.input}
          onChange={handleInputChange('username')}
          disabled={loading}
        />

        <TextField
          error={incorrectUser}
          id="outlined-error-helper-text"
          helperText={incorrectUser && "Usuario o contraseña inválida"}
          variant="outlined"
          placeholder="Contraseña"
          className={classes.input}
          onChange={handleInputChange('password')}
          disabled={loading}
        />

        <Button
          variant="contained"
          className={classes.submitBtn}
          type="submit"
          disabled={!inputs.username || !inputs.password || loading}
        >
          Iniciar Sesión
        </Button>
      </form>
    </Paper>

  );
};

export default SignInComponent;