import { Button, TextField } from '@mui/material';
import WelcomeFooter from '../../welcome/layout/welcomeFooter/welcomeFooter';
import WelcomeHeader from '../../welcome/layout/welcomeHeader/welcomeHeader';
import { Link } from 'react-router-dom';
import './login.scss';
import { useState } from 'react';
import { TLoginUser } from '../../../types/types';
import { AppDispatch } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { loginPost } from '../../../store/login.slice';

const Login = () => {
    const dispatch: AppDispatch = useDispatch();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const LoginHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const loginData: TLoginUser = {
            email: email,
            password: password,
        }
        dispatch(loginPost(loginData));
    }
    return (
        <div className="login">
            <WelcomeHeader/>
            <div className="login-content">
                <div className="container">
                    <div className="login-header">
                        <h1>Log in</h1>
                    </div>
                    <form onSubmit={(e) => LoginHandler(e)} className="login-form">
                        <TextField onChange={(e) => setEmail(e.target.value)} required className='inputs' type="email" id="outlined-basic" label="email" variant="outlined" />
                        <TextField onChange={(e) => setPassword(e.target.value)} required className='inputs' type="password"  label="password" variant="outlined" />
                        <Link className='forgot' to="/">Forgot password?</Link>
                        <Button className='send-button' type='submit' variant='contained'>Sign in</Button>
                    </form>
                </div>
            </div>
            <WelcomeFooter/>
        </div>
    )
}

export default Login;