import style from './Home.module.scss'
import {Link} from "react-router-dom";

const Home = () => {
    return(
        <div className={style.wrapper}>
            <div className={style.form}>
                <h1>Hello, Anonymous</h1>
                <Link className={style.login} to='/login'>Login</Link>
                <Link className={style.register} to='/register'>Register</Link>
            </div>
        </div>
    )
}

export default Home;
