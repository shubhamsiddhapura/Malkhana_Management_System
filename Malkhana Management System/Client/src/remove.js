import React, { useState } from "react";
import Axios from 'axios';
import Path from "./path";
import "./remove.css"

const Remove = () => {
    const [barId, setBarId] = useState('');
    const [data, setData] = useState(null);
    const handleFind = async () => {
        await Axios.post("http://localhost:5000/findByBar", {
            barId: barId,
        }).then(res => {
            setData(res.data);
        })
    }
    const handleFSL = async () => {
        await Axios.post("http://localhost:5000/sendItemToFSL", {
            barId: barId,
        }).then(res => {
            console.log(res.data);
        })
    }
    const handleRemove = async () => {
        await Axios.post("http://localhost:5000/removeItem", {
            barId: barId,
        }).then(res => {
            console.log(res.data);
            setData(null);
            setBarId("");
        })
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
        <div className="remove_div">
            <Path cur_page = "Remove Item" cur_path = "Home / Remove Item / " />
            <div className="remove_form filtered_data">
                <div className="remove_data_enter">
                    <div>Enter Item Barcode: </div>
                    <input type="number" onChange={(e) => {setBarId(e.target.value)}}/>
                    <button onClick={handleFind}>FIND</button>
                </div>
                {
                    (data === null)? "No Data":
                    <div className="visitor_data">
                        <div>Case ID: {data.case_id}</div>
                        <div className="remove_type">Item Type: {data.type}</div>
                        <div>Entry At: {formatDateToReadable(data.created_at)}</div>
                        <div>Stored At: {data.stored_comp.toUpperCase()}</div>
                        <div>Malkhana Name: {data.malkhana_name}</div>
                        <div>Depositor Name: {data.depositor_name}</div>
                        <button className="remove_visitor_button" onClick={handleRemove}>REMOVE ITEM</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Remove;