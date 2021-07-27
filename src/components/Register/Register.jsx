import style from "../Register/Register.module.scss";
import {Link} from "react-router-dom";
import {useState} from "react";
import Firebase from './../../firebase'

const Register = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const onRegister = async () => {
        try{
            await Firebase.register(email, password)
            props.history.replace('/user')
        } catch(error){
            alert(error.message);
            props.history.replace('/');
        }
    }

    return(
        <div className={style.wrapper}>
            <div className={style.form}>
                <h1>Register</h1>
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
                <div className={style.buttons}>
                    <Link to='/login' className={style.loginBtn}>Sign in</Link>
                    <Link onClick={onRegister} to='/user' className={style.registerBtn}>Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Register;
