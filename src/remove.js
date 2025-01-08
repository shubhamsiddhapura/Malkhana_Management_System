import React, { useState } from "react";
import Axios from 'axios';
import Path from "./path";
import "./remove.css";

const Remove = () => {
    const [barId, setBarId] = useState(''); // Holds the input barcode value
    const [data, setData] = useState(null); // Holds data of the found item
    const [barcodes, setBarcodes] = useState([]); // State to hold the list of all barcodes
    const [selectedBarcodes, setSelectedBarcodes] = useState([]); // State to hold selected barcodes

    // Function to find an item by barcode
    const handleFind = async () => {
        try {
            const res = await Axios.post("http://localhost:5000/findByBar", { barId });
            setData(res.data);
        } catch (error) {
            console.error("Error finding item:", error);
        }
    };

    // Function to send an item to FSL
    const handleFSL = async () => {
        try {
            const res = await Axios.post("http://localhost:5000/sendItemToFSL", { barId });
            console.log(res.data);
        } catch (error) {
            console.error("Error sending item to FSL:", error);
        }
    };

    // Function to remove an item
    const handleRemove = async () => {
        try {
            const res = await Axios.post("http://localhost:5000/removeItem", { barId });
            console.log(res.data);
            setData(null);
            setBarId('');
        } catch (error) {
            console.error("Error removing item:", error);
        }
    };

    // Function to fetch all barcodes
    const handleGetAllBarcodes = async () => {
        try {
            const res = await Axios.get("http://localhost:5000/getAllBarcodes");
            setBarcodes(res.data);
        } catch (error) {
            console.error("Error getting all barcodes:", error);
        }
    };

    // Function to toggle the selection of a barcode
    const toggleSelectBarcode = (barcodeId) => {
        setSelectedBarcodes(prevSelected => {
            if (prevSelected.includes(barcodeId)) {
                return prevSelected.filter(id => id !== barcodeId); // Remove from selected if already selected
            } else {
                return [...prevSelected, barcodeId]; // Add to selected if not already
            }
        });
    };

    // Check if a barcode is selected
    const isBarcodeSelected = (barcodeId) => selectedBarcodes.includes(barcodeId);

    // Function to format date to a readable format
    const formatDateToReadable = (dateTimeString) => {
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
    };

    return (
        <div className="remove_div">
            <Path cur_page="Remove Item" cur_path="Home / Remove Item / " />
            <div className="remove_form filtered_data">
                <div className="remove_data_enter">
                    <div>Enter Item Barcode: </div>
                    <input
                        type="number"
                        value={barId}
                        onChange={(e) => setBarId(e.target.value)}
                    />
                    <button onClick={handleFind}>FIND</button>
                    <button onClick={handleGetAllBarcodes}>SHOW ALL BARCODES</button>
                </div>
                {
                    (data === null) ? "No Data" :
                        <div className="visitor_data">
                            <div>Case ID: {data.case_id}</div>
                            <div className="remove_type">Item Type: {data.type}</div>
                            <div>Entry At: {formatDateToReadable(data.created_at)}</div>
                            <div>Stored At: {data.stored_comp.toUpperCase()}</div>
                            <div>Malkhana Name: {data.malkhana_name}</div>
                            <div>Depositor Name: {data.depositor_name}</div>
                            <button className="remove_visitor_button" onClick={handleRemove}>REMOVE ITEM</button>
                            <button onClick={handleFSL}>SEND TO FSL</button>
                        </div>
                }
                {
                    barcodes.length > 0 && (
                        <div className="barcode_list">
                            <h3>All Barcodes</h3>
                            <table className="data_table">
                                <thead>
                                    <tr>
                                        <th>Barcode</th>
                                        <th>Case ID</th>
                                        <th>Item Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {barcodes.map((item, index) => (
                                        <tr
                                            key={index}
                                            className={isBarcodeSelected(item.barcode_id) ? "selected_barcode" : ""}
                                            onClick={() => toggleSelectBarcode(item.barcode_id)}
                                        >
                                            <td>{item.barcode_id}</td>
                                            <td>{item.case_id}</td>
                                            <td>{item.item_type}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Remove;
