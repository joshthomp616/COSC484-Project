import * as React from 'react';
import { Button, TextField, Typography, Box} from '@mui/material'
import { Link } from 'react-router-dom';
import Navbar from '../../nav'


// export default function Login() {
  // const minRowSpacing = 0;
  // const expandedRowSpacing = 3;
  // const [rowSpacing, setSpacing] = React.useState(minRowSpacing);
  // const [login, showLogin] = React.useState(false);
  // const loginContainerRef = React.useRef(null);

  const Login = () => {
    const [isSignUp, setIsSignUp] = React.useState(false);
    const [input, setInput] = React.useState({
      username: "",
      email: "",
      password: ""
    });

    const handleChange = (e) => {
      setInput((prevState) => ({
        ...prevState,
         [e.target.name]: e.target.value
      }))
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(input);
    }

    const resetState =() =>{
      setIsSignUp(!isSignUp);
      setInput({username:"", email: "", password: ""});
    }
    // console.log(isSignUp);
  //   showLogin((prev) => !prev)
  //   setSpacing((current) => current === minRowSpacing ? expandedRowSpacing : minRowSpacing);
  // }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box display = "flex" 
        flexDirection = {"column"}
         maxWidth= {420}
          alignItems="center" 
          justifyContent={"center"}
          margin= "auto"
          marginTop = {5}
          padding = {5}
          borderRadius= {5}
          boxShadow = {"5px 5px 10px #64ffda"}
          sx= {{ ":hover" : {boxShadow: "10px 10px 20px #64ffda",}
          }}

          >
           

          <Typography variant= "h2" padding= {3} textAlign="center"> {isSignUp ? "SignUp" : "Login"}</Typography>
          {isSignUp && <TextField onChange = {handleChange} 
          name = "username" 
          value = {input.username}
           margin = "normal" 
           type ={"text"} 
           variant="outlined"
          placeholder='Username' />}

          <TextField onChange = {handleChange}
           name = "email" 
           value = {input.email}
          margin = "normal"
            type ={"email"}
            variant="outlined"
            placeholder='Email' />

          <TextField 
          onChange = {handleChange}
           name = "password"
            value = {input.password}
             margin = "normal"
              type ={"password"}
               variant="outlined"
                placeholder='Password' />

          <Button type ="submit" sx = {{marginTop:3, borderRadius:3}} variant= "contained" color= "primary" > {isSignUp ? "SignUp" : "Login"}</Button>

          <Button onClick = {resetState}   sx = {{marginTop:3, borderRadius:3}}>
            {isSignUp ? "Login" : "SignUp"}
          </Button>
        </Box>
      </form>
    </div>
    
  );
};

export default Login