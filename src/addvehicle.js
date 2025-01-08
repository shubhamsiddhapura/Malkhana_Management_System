import React, {useState,useEffect} from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import Axios from 'axios';
import Path from "./path";

const AddVehicle = ({setPage, setPlace, setBarcode, setSuccess}) => {
    const location = useLocation();
    const [caseId, setCaseId] = useState("");
    
    useEffect(() => {
        const newCaseId = generateAlphanumericId();
        setCaseId(newCaseId);
    }, []);
    const [vId, setVId] = useState("");
    const [vType, setVType] = useState("scooty");
    const [depId, setDepId] = useState("");
    const [depName, setDepName] = useState("");
     
    const generateAlphanumericId = () => {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        let result = '';
        
        // Generate 3 random letters
        for (let i = 0; i < 3; i++) {
            result += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        
        // Generate 4 random numbers
        for (let i = 0; i < 4; i++) {
            result += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }
        
        return result;
    };

    const handleAdd = async () => {
        await Axios.post("http://localhost:5000/addvehicle", {
            caseId: caseId,
            vId: vId,
            vType: vType,
            depId: depId,
            depName: depName,
            ps: location.state
        }).then(res => {
            if(res.data.mes === "New Item Created"){
                setPlace(res.data.loc);
                setBarcode(res.data.bar);
                setSuccess(true);
            }
            setPage("AfterCreate");
        })
    }
    return(
        <div className="add_vehicle_main">
            <Path cur_page = "Add Vehicle" cur_path = "Home / Add Item / Parking / " />
            <div className="add_vehicle filtered_data">
                <div className="form_details_text">ADD THE VEHICLE DETAILS : </div>
                <div className="form_item">
            <p>Case ID:</p>
            <input
                type="text"
                value={caseId}
                onChange={(e) => setCaseId(e.target.value)}
                readOnly
            />
        </div>
                <div className="form_item">
                    <p>Enter Vehicle Number: </p>
                    <input type="text" onChange={(e) => {setVId(e.target.value)}} />
                </div>
                <div className="form_item">
                    <p>Vehicle Type: </p>
                    <select name="item_cat" id="" onChange={(e) => {setVType(e.target.value)}}>
                        <option value="scooty">2-Wheeler</option>
                        <option value="car">3/4 - Wheeler</option>
                        <option value="truck">Heavy Vehicle</option>
                    </select>
                </div>
                <div className="form_item">
                    <p>ID of Depositor: </p>
                    <input type="text" onChange={(e) => {setDepId(e.target.value)}} />
                </div>
                <div className="form_item">
                    <p>Name of Depositor: </p>
                    <input type="text" onChange={(e) => {setDepName(e.target.value)}} />
                </div>
                <button className="item_submit_button" onClick={handleAdd}>ADD VEHICLE</button>
            </div>
        </div>
    )
}

export default AddVehicle;