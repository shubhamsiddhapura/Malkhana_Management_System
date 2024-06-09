import React from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import "./topbar.css"
import Face from "./face.png"

const SuperTopbar = ({setPage, page}) => {
    const location = useLocation();
    return(
        <div className="topbar_main">
            <div className="download_all">
                <i class="fa-solid fa-download"></i>
            </div>
            <div className="notification">
                <i class="fa-solid fa-bell" onClick={() => {setPage("Notification")}}></i>
            </div>
            <div className="police_name">
                <p>BARODA {location.state} </p>
            </div>
            <div className="face_div">
                <img src={Face} alt="" />
            </div>
        </div>
    )
}

export default SuperTopbar;