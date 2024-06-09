import React, { useState } from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import jsPDF from 'jspdf';
import "./topbar.css";
import Axios from 'axios';
import Face from "./face.png"
import { applyPlugin } from 'jspdf-autotable'
applyPlugin(jsPDF)

const Topbar = ({setPage, page}) => {
    const location = useLocation();
    const [data, setData] = useState([]);
    const [kar, setKar] = useState(false);
    const handleAana = async () => {
        await Axios.post("http://localhost:5000/printData", {
            ps: location.state
        }).then(res => {
            var result = [];
            let i = 0;
            while(i < res.data.length){
                result.push([res.data[i].case_id, res.data[i].stored_comp, res.data[i].type]);
                i++;
            }
            setData(result);
            setKar(true);
        });
    }
    handleAana();
    const handlePrint = async () => {

            let doc = new jsPDF();
            doc.autoTable({
                head: [['Case ID', 'Stored Comp', 'Type']],
                body: data
            })
            doc.save('malkhanadata.pdf');
    }
    return(
        <div className="topbar_main">
            <div className="download_all">
                <i class="fa-solid fa-download" onClick={handlePrint}></i>
            </div>
            <div className="notification">
                <i class="fa-solid fa-bell" onClick={() => {setPage("Notification")}}></i>
            </div>
            <div className="police_name">
                <p>{location.state} POLICE STATION</p>
            </div>
            <div className="face_div">
                <img src={Face} alt="" />
            </div>
        </div>
    )
}

export default Topbar;