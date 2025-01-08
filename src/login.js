import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import Emblem from './emblem.png';
import Police from './gujpol.png';
import Sardar from './sardar.png';
import Somnath from './somnath.png';
import Sursagar from './sursagar.png';
import Konark from './konark.png';
//import Sidi from './sidi.png';
import Garba from './garba.png';
import Garba2 from './garba2.png';
import './login.css';

const Login = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [alert, setAlert] = useState('');
    const [uname, setUname] = useState('');
    const [pword, setPword] = useState('');

    // Password validation function
    const validatePassword = (password) => {
        const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
        return regex.test(password);
    };

    const handleSubmit = async () => {
        if (!validatePassword(pword)) {
            setAlert("Password must be at least 8 characters long, contain one uppercase letter, and one special character.");
            return;
        }

        await Axios.post("http://localhost:5000/login", {
            username: uname,
            password: pword
        }).then(res => {
            console.log(res.data);
            if(res.data.mes === "No Such User Exist"){
                setAlert("No Such User Exist");
            }
            else if(res.data.mes === "Correct"){
                setName(res.data.name);
                sessionStorage.setItem('user', res.data.name);
                navigate("/", {
                    replace: true,
                    state: res.data.name,
                });
            }
            else{
                setAlert("Wrong Username Password");
            }
        });
    };

    return (
        <div className="login">
            <div className="space"></div>
            <div className="login_box">
                <div className="logo_for_login">
                    <img src={Police} alt="" />
                </div>
                <p className="malkhana_text1">LOGIN</p>
                <p className="malkhana_text">EVIDENCE TRACKING SYSTEM</p>
                <p>{alert}</p>
                <p className="key_login">Enter Username : </p>
                <input type="text" name="username" className="login_input" id="username" onChange={(e) => {setUname(e.target.value)}} />
                <p className="key_login">Enter Password : </p>
                <input type="password" name="password" className="login_input" id="password" onChange={(e) => {setPword(e.target.value)}} />
                <br />
                <button className="submit_login" onClick={handleSubmit}>SUBMIT</button>
            </div>
            <div className="login_background">
                <img className="sardar" src={Sardar} alt="" />
                <img className="somnath" src={Somnath} alt="" />
                <img className="sursagar" src={Sursagar} alt="" />
                <img className="konark" src={Konark} alt="" />
                <img className="garba" src={Garba} alt="" />
                <img className="garba garba2" src={Garba2} alt="" />
            </div>
        </div>
    );
};

export default Login;
