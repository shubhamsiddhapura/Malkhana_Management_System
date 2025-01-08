import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import "./topbar.css";
import Axios from 'axios';
import Face from "./face.png";
import { applyPlugin } from 'jspdf-autotable';

applyPlugin(jsPDF);

const Topbar = ({ setPage, page }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [kar, setKar] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

    const handleAana = async () => {
        await Axios.post("http://localhost:5000/printData", {
            ps: location.state
        }).then(res => {
            var result = [];
            let i = 0;
            while (i < res.data.length) {
                result.push([res.data[i].case_id, res.data[i].stored_comp, res.data[i].type]);
                i++;
            }
            setData(result);
            setKar(true);
        });
    }

    const handleLogin = () => {
        // Example login functionality, replace with actual logic (like an API call)
        setIsLoggedIn(true);
    }

    const handleLogout = () => {
        // Example logout functionality, clear any stored authentication data here
        setIsLoggedIn(false);
        navigate("/login"); // Redirect to login page after logout
    }

    const handlePrint = async () => {
        let doc = new jsPDF();
        doc.autoTable({
            head: [['Case ID', 'Stored Comp', 'Type']],
            body: data
        });
        doc.save('malkhanadata.pdf');
    }

    handleAana();

    return (
        <div className="topbar_main">
            <div className="download_all">
                <i className="fa-solid fa-download" onClick={handlePrint}></i>
            </div>
            <div className="notification">
                <i className="fa-solid fa-bell" onClick={() => { setPage("Notification") }}></i>
            </div>
            <div className="police_name">
                <p>{location.state} POLICE STATION</p>
            </div>
           
            <div className="face_div">
                <img src={Face} alt="" />
            </div>
            <div className="auth_buttons">
                    <button onClick={handleLogout}>Login</button>
            </div>
        </div>
    )
}

export default Topbar;
