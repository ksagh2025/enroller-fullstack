import "milligram";
import './App.css';
import {useState} from "react";
import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel";

function App() {
    const localStorageLogged = localStorage.getItem("userLogged");

    const [loggedIn, setLoggedIn] = useState(localStorageLogged);

    // const localStorageLogged = localStorage.getItem("userLogged");
    //  if (localStorageLogged !== null) {setLoggedIn(localStorageLogged)}

    function login(email) {
        if (email) {
            setLoggedIn(email);
            localStorage.setItem("userLogged", email);
        }
    }

    function logout() {
        setLoggedIn('');
        localStorage.removeItem("userLogged");
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {loggedIn ? <UserPanel username={loggedIn} onLogout={logout}/> : <LoginForm onLogin={login}/>}
        </div>
    );
}

export default App;
