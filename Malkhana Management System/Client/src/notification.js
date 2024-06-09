import React, {useState, useEffect} from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import Axios from 'axios';
import Scan from './frame.png'
import Path from "./path";
import "./notifications.css"

const Notification = () => {
    const location = useLocation();
    const [data, setData] = useState([]);
    const [audit, setAudit] = useState(false);
    const [missing, setMissing] = useState(0);

    const showNotifications = async () => {
        await Axios.post("http://localhost:5000/viewnotifications", {
            ps: location.state
        }).then(res => {
            setData(res.data);
        });
    }
    showNotifications();
    const checkAudit = async () => {
        await Axios.post("http://localhost:5000/checkAudit", {
            ps: location.state
        }).then(res => {
            setAudit(res.data);
        });
    }
    checkAudit();

    const handleSuccess = async () => {
        await Axios.post("http://localhost:5000/auditSuccess", {
            ps: location.state
        }).then(res => {
            setAudit(false);
        });
    }

    const handleFailure = async () => {
        await Axios.post("http://localhost:5000/auditFailure", {
            ps: location.state,
            missing_count: missing
        }).then(res => {
            console.log("hiiii");
            setAudit(false);
        });
    }

    const [outcome, setOutcome] = useState("");

    function formatDateToReadable(dateTimeString) {
        const date = new Date(dateTimeString);
        const options = {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        };
        return date.toLocaleString("en-US", options);
      }
    return(
        <div>
            <Path cur_page = "Notifications" cur_path = "Home / Notifications / " />
            {
                (data.length === 0)?"Loading":
                <div className="notifications_main filtered_data">
                {   
                    (location.state === "Police Headquater" || (!audit))?"":
                    <div className="audit_notification">
                        <p>QR Code for the officer</p>
                        <div className="audit_content">
                        <img src={Scan} alt="" />
                        <div className="answer_div">
                        <select name="result" id="result" onChange={(e) => {setOutcome(e.target.value)}}>
                            <option value="outcome">What's the outcome?</option>
                            <option value="good">All Clear</option>
                            <option value="bad">Something is Wrong</option>
                        </select>
                        {
                            (outcome === 'good')?
                            <div>
                                <p>Password for success by Auditor: </p>
                                <input className="audit_input" type="text" />
                                <button className="audit_button" onClick={handleSuccess}>Submit</button>
                            </div>:""
                        }

                        {
                            (outcome === 'bad')?
                            <div>
                                <p>How many item missing: </p>
                                <input type="number" className="audit_input" onChange={(e) => {setMissing(e.target.value)}}/>
                                <button className="audit_button" onClick={handleFailure}>Submit</button>
                            </div>:""
                        }
                        </div>
                        </div>
                    </div>
                }
                {
                    data.map((item) => (
                        <div className="message">
                            {item.message}
                            <div>{formatDateToReadable(item.created_at)}</div>
                        </div>
                    ))
                }
            </div>
            }

        </div>
    )
}

export default Notification;