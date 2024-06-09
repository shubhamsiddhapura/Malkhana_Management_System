import React from "react";
import Barcode from 'react-barcode';
import Path from "./path";
import './barcode.css'

const AfterCreate = ({place, success, barcode}) => {
    return(
        <div>
            <Path cur_page = "Barcode" cur_path = "Home / Add Item / Barcode /" />
            <div className="barcode_main filtered_data">
            {
                (success)?
                <div>
                    <div className="barcode_generated">Barcode Generated Successfully...</div>
                    <Barcode value={barcode} />
                    <div className="place_of_item">{place}</div>
                    <button className="item_submit_button">PRINT BARCODE</button>
                </div>:
                ""
            }
            </div>
        </div>
    )
}

export default AfterCreate;