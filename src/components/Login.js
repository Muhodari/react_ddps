import React,{useState,useContext} from 'react'
import { useNavigate } from 'react-router'
import API from '../API'
// components
import Button from './Buttons'
// styles
import { Wrapper } from './Login.styles'
// context
import { Context } from '../context'

const Login = () => {
const[username,setUsername] = useState('');
const [password,setPassword] = useState('')
const [error ,setError] = useState(false)

const [_user,setUser] = useContext(Context)

const navigate = useNavigate();


    const handleSubmit = ()=>{};

    const handleInput = e =>{
        const name = e.currentTarget.name;
        const value = e.currentTarget.value
     
        if(name === 'username') setUsername(value)
        if(name === 'password') setPassword(value)

    };

    return(

        <Wrapper>
        <label>Username:</label>
        <input
          type='text'
           value={username}
           name ='username'
           onChange={handleInput}
           />
           <label>Password:</label>
           <input 
           type='password'
           value={password}
           name='password'
           onChange={handleInput}
           />
   <Button text='Login' callback={handleSubmit} />
        
        </Wrapper>
    )

}

export default Login