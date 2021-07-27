import style from './Login.module.scss'
import {Link, withRouter} from "react-router-dom";
import {useState} from "react";
import Firebase from './../../firebase'

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const onLogin = async () => {
        try{
            await Firebase.login(email, password);
            props.history.replace('/user')
        }catch(error){
            alert(error.message)
        }
    }

    return(
        <div className={style.wrapper}>
            <div className={style.form}>
                <h1>Sign in</h1>
                <input
                    type="text"
                    placeholder='Email*'
                    value={email}
                    onChange={onChangeEmail}/>
                <input
                    type="password"
                    placeholder='Password*'
                    value={password}
                    onChange={onChangePassword}/>
                <div className={style.buttons}>
                    <Link to='/register' className={style.registerBtn}>Register</Link>
                    <Link onClick={onLogin} to='/user' className={style.loginBtn}>Sign in</Link>
                </div>

            </div>
        </div>
    )
}

export default withRouter(Login);
