import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Emblem from './emblem.png'
import Police from './gujpol.png'
import "./sidebar.css"

const Sidebar = ({setPage, page}) => {
    const navigate = useNavigate();
    const [add, openAdd] = useState(false);
    const [map, openMap] = useState(false);
    return(
        <div className="sidebar_main">
            <div className="logo">
               
                <img src={Police} alt="" />
            </div>
            <div className="menu_items">
                {/* Dashboard */}
                <div className={`menu_item ${(page === "Filter")?"active": ""}`} onClick={() => setPage("Filter")}>
                    <i class="fa-solid fa-filter menu_item_icon"></i>
                    <p className="menu_item_name">Dashboard</p>
                </div>
                {/* Add Item */}
                <div className={`menu_item ${(page === "AddItem" || page === "AddVehicle" || page == "AfterCreate")?"active": ""}`}>
                    <i class="fa-solid fa-plus menu_item_icon"></i>
                    <p className="menu_item_name">Add Item</p>
                    <i class={`fa-solid fa-chevron-down ${(add)?"ulta":""}`} onClick={() => {openAdd(add => !add)}}></i>
                </div>
                {/* Add Item Storage */}
                {
                    (add)?
                    <div className="add_sub">
                        <div className={`menu_item ${(page === "AddItem")?"sub_active": ""}`} onClick={() => setPage("AddItem")}>
                            <i class="fa-solid fa-landmark menu_item_icon"></i>
                            <p className="menu_item_name">Storage</p>
                        </div>
                        {/* Add Item Parking  */}
                        <div className={`menu_item ${(page === "AddVehicle")?"sub_active": ""}`} onClick={() => setPage("AddVehicle")}>
                            <i class="fa-solid fa-motorcycle menu_item_icon"></i>
                            <p className="menu_item_name">Parking</p>
                        </div>
                    </div>:""
                }
                {/* Remove Item */}
                <div className={`menu_item ${(page === "Remove")?"active": ""}`} onClick={() => setPage("Remove")}>
                    <i class="fa-solid fa-trash-can menu_item_icon"></i>
                    <p className="menu_item_name">Remove Item</p>
                </div>
                {/* Map */}
                <div className={`menu_item ${(page === "MapVehicle" || page === "MapItem")?"active": ""}`}>
                    <i class="fa-solid fa-map menu_item_icon"></i>
                    <p className="menu_item_name">Map</p>
                    <i class={`fa-solid fa-chevron-down ${(map)?"ulta":""}`} onClick={() => {openMap(map => !map)}}></i>
                </div>
                {/* Map Storage */}
                {
                    (map)?
                    <div className="map_sub">
                        <div className={`menu_item ${(page === "MapItem")?"sub_active": ""}`} onClick={() => setPage("MapItem")}>
                            <i class="fa-solid fa-landmark menu_item_icon"></i>
                            <p className="menu_item_name">Storage</p>
                        </div>
                        {/* Map Parking */}
                        <div className={`menu_item ${(page === "MapVehicle")?"sub_active": ""}`} onClick={() => setPage("MapVehicle")}>
                            <i class="fa-solid fa-motorcycle menu_item_icon"></i>
                            <p className="menu_item_name">Parking</p>
                        </div>
                    </div>:""
                }
                {/* Visitor Data */}
                <div className={`menu_item ${(page === "Visitor")?"active": ""}`} onClick={() => setPage("Visitor")}>
                    <i class="fa-solid fa-user menu_item_icon"></i>
                    <p className="menu_item_name">Visitor Data</p>
                </div>
                {/* Statistics */}
                <div className={`menu_item ${(page === "Statistics")?"active": ""}`} onClick={() => setPage("Statistics")}>
                    <i class="fa-solid fa-chart-line menu_item_icon"></i>
                    <p className="menu_item_name">Statistics</p>
                </div>
                {/* Log Out */}
                <div className="menu_item">
                    <i class="fa-solid fa-right-from-bracket menu_item_icon"></i>
                    <p className="menu_item_name" onClick={()=>{navigate("/login")}}>Log Out</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;


//<i class="fa-solid fa-bell"></i>
//<i class="fa-solid fa-download"></i>

//<i class="fa-solid fa-chevron-down"></i>

//Gotri Police Station
//Manjalpur Police Station
//JP Road Police Station
//Sayajiganj Police Station
//Raopura Police Station

