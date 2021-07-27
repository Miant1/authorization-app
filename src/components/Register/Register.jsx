import style from "../Register/Register.module.scss";
import {Link} from "react-router-dom";
import {useState} from "react";
import firebase from './../../firebase'

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const onChangeMessage = (e) => {
        setMessage(e.target.value);
    }
    const onRegister = async () => {
        try{
            await firebase.register(name, email, password)
        } catch(error){

        }
    }

    return(
        <div className={style.wrapper}>
            <div className={style.form}>
                <h1>Register</h1>
                <input
                    type="text"
                    placeholder='Full Name*'
                    value={name}
                    onChange={onChangeName}
                />
                <input
                    type="text"
                    placeholder='Email*'
                    value={email}
                    onChange={onChangeEmail}
                />
                <input
                    type="password"
                    placeholder='Password*'
                    value={password}
                    onChange={onChangePassword}
                />
                <input
                    type="text"
                    placeholder='Your first message*'
                    value={message}
                    onChange={onChangeMessage}
                />
                <div className={style.buttons}>
                    <Link to='/login' className={style.loginBtn}>Sign in</Link>
                    <Link onClick={onRegister} to='/user' className={style.registerBtn}>Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Register;
