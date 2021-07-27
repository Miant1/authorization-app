import style from './User.module.scss'
import Firebase from'../../firebase'

const User = (props) => {

    const onLogout = async () => {
        await Firebase.logout();
        props.history.push('/');
    }

    return (
        <div className={style.wrapper}>
            <h1>Hello</h1>
            <button onClick={onLogout}>Logout</button>
        </div>
    )
}

export default User;
