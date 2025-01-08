import React, { useState } from "react";
import Axios from 'axios';
import {useLocation, useNavigate} from 'react-router-dom';
import Path from "./path";
import "./visitor.css"

const Visitor = () => {
    const location = useLocation();
    const empIds = [111,222,333,444,555];
    const empNames = ["Amar", "Vijay", "Prem", "Rahul", "Karishma"];
    const [id, setId] = useState();
    const [alert, setAlert] = useState("");
    const [date, setDate] = useState("");
    const [data, setData] = useState();
    const  [tat, setTat] = useState(true);
    const handleVisitor = async () => {
        if(empIds.indexOf(Number(id)) === -1){
            setAlert("Invalid ID, Permission Denied!");
        }
        else{
            setAlert("");
            await Axios.post("http://localhost:5000/createVisitor", {
                v_id: Number(id),
                v_name: empNames[empIds.indexOf(Number(id))],
                malkhana_name: location.state
            }).then(res => {
                console.log(res.data)
            })
        }
    }

    async function removeVisitor(visitor_id){
        await Axios.post("http://localhost:5000/removeVisitor", {
            malkhana_name: location.state,
            visitor_id: visitor_id
        }).then(res => {
            setData(res.data);
            console.log(res.data);
        })
    }

    const handleToday = async () => {
        await Axios.post("http://localhost:5000/todayVisitor", {
            malkhana_name: location.state
        }).then(res => {
            setData(res.data)
        })
    }

    const handleDate = async () => {
        await Axios.post("http://localhost:5000/dateVisitor", {
            malkhana_name: location.state,
            date: date
        }).then(res => {
            setData(res.data)
        })
    }

    const handleAll = async () => {
        await Axios.post("http://localhost:5000/allVisitor", {
            malkhana_name: location.state
        }).then(res => {
            setData(res.data)
        })
    }

    const handleNow = async () => {
        await Axios.post("http://localhost:5000/nowVisitor", {
            malkhana_name: location.state
        }).then(res => {
            setData(res.data)
        })
    }

    console.log(tat);
    if(tat === true){
        handleNow();
        setTat(false);
    }

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
        <div className="visitor_main">
            <Path cur_page = "Visitor Data" cur_path = "Home / Visitor Data / " />
            <div className="visitor_form filtered_data">
                <div className="create_entry_div">
                    <p>Enter Visitor Id: </p>
                    <input type="number" onChange={(e) => {setId(e.target.value)}}/>
                    <button className="touched" onClick={handleVisitor}>CREATE ENTRY</button>
                    <button className="untouched untouched_now" onClick={handleNow}>Now</button>
                    <button className="untouched" onClick={handleToday}>Today</button>
                    <button className="untouched" onClick={handleAll}>All</button>
                    <input type="date" className="touched_dd" onChange={(e) => {setDate(e.target.value)}}/>
                    <button className="touched" onClick={handleDate}>FIND BY DATE</button>
                </div>
                {alert}
                {
                    (data === undefined)?"No Data":
                    data.slice().reverse().map((item, index) => (
                            <div className="visitor_data">
                                <div>Visitor Name: {item.visitor_name} </div>
                                <div>Visitor Id: {item.visitor_id} </div>
                                <div>Entered At: {formatDateToReadable(item.created_at)}</div>
                                {(item.inside)?<button className="remove_visitor_button" onClick={ () =>{removeVisitor(item.visitor_id)}}>REMOVE</button>:<div>Exit : {formatDateToReadable(item.removed_at)}</div>}
                            </div>
                        ))
                }
            </div>
        </div>

    )
}

export default Visitor;