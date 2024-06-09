import React, {useState} from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import Axios from 'axios';
import Path from "./path";
import './additem.css';

const AddItem = ({setPage, setPlace, setBarcode, setSuccess}) => {
    const location = useLocation();
    const [caseId, setCaseId] = useState("");
    const [cat, setCat] = useState("drugs");
    const [box, setBox] = useState("box_1");
    const [depId, setDepId] = useState("");
    const [depName, setDepName] = useState("");

    const handleAdd = async () => {
        await Axios.post("http://localhost:5000/additem", {
            caseId: caseId,
            cat: cat,
            box: box,
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
        <div className="add_item_div">
            <Path cur_page = "Add Item" cur_path = "Home / Add Item / Storage /" />
            <div className="create_item_form filtered_data">
                <div className="form_details_text">ADD THE ITEM DETAILS : </div>
                <div className="form_item">
                    <p>Case ID: </p>
                    <input type="text" onChange={(e) => {setCaseId(e.target.value)}} />
                </div>
                <div className="form_item">
                    <p>Item Category: </p>
                    <select name="item_cat" id="" onChange={(e) => {setCat(e.target.value)}}>
                        <option value="drugs">Drugs</option>
                        <option value="weapon">Weapon</option>
                        <option value="liquid">Liquid</option>
                        <option value="document">Document</option>
                        <option value="ornament">Cash / Jewellery</option>
                    </select>
                </div>
                <div className="form_item">
                    <p>Box Used: </p>
                    <select name="box_cat" id="" onChange={(e) => {setBox(e.target.value)}}>
                        <option value="box_1">Box 1</option>
                        <option value="box_2">Box 2</option>
                        <option value="box_3">Box 3</option>
                        <option value="box_4">Box 4</option>
                        <option value="box_5">Box 5</option>
                        <option value="s_bag">Bag 1</option>
                        <option value="m_bag">Bag 2</option>
                        <option value="l_bag">Bag 3</option>
                        <option value="new">New Size</option>
                    </select>
                </div>
                {
                    (box === 'new')?
                    <div>
                        <div className="form_item">
                            <p>Expected Lenght:</p>
                            <input type="number" />
                        </div>
                        <div className="form_item">
                            <p>Expected Widht:</p>
                            <input type="number" />
                        </div>
                        <div className="form_item">
                            <p>Expected Height:</p>
                            <input type="number" />
                        </div>
                    </div>:""
                }
                <div className="form_item">
                    <p>ID of Depositor: </p>
                    <input type="text" required onChange={(e) => {setDepId(e.target.value)}} />
                </div>
                <div className="form_item">
                    <p>Name of Depositor: </p>
                    <input type="text" required onChange={(e) => {setDepName(e.target.value)}} />
                </div>
                <button type="submit" className="item_submit_button" onClick={handleAdd}>ADD ITEM</button>
            </div>
        </div>

    )
}

export default AddItem;