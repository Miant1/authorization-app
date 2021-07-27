import style from './App.module.scss';
import {useEffect, useState} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../../pages/Home/Home";
import User from "../../pages/User/User";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Firebase from '../../firebase'

function App() {

    const [firebaseInitialized, setFirebaseInitialized] = useState(false);

    useEffect(() => {
        Firebase.isInitialized().then(val => {
            setFirebaseInitialized(val)
        })
    })

    return (
        <BrowserRouter className={style.app}>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/user' component={User}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/register' component={Register}/>
            </Switch>

        </BrowserRouter>
    );
}

export default App;
