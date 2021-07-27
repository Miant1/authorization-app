import style from './App.module.scss';
import firebase from 'firebase';
import {useEffect} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "../../pages/Home/Home";
import User from "../../pages/User/User";
import Login from "../Login/Login";
import Register from "../Register/Register";

function App() {

    useEffect(() => {
        const db = firebase.database();
        console.log(db);
    }, [])

  return (
    <BrowserRouter className={style.app}>

        <Route exact path='/' component={Home} />
        <Route exact path='/user' component={User} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />

    </BrowserRouter>
  );
}

export default App;
