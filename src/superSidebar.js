import React, {useState} from "react";
import Emblem from './emblem.png'
import Police from './gujpol.png'
import "./sidebar.css"

const SuperSidebar = ({setPage, page}) => {
    const [map, openMap] = useState(false);
    return(
        <div className="sidebar_main">
            <div className="logo">
                <img src={Emblem} alt="" />
                <img src={Police} alt="" />
            </div>
            <div className="menu_items">
                {/* Dashboard */}
                <div className={`menu_item ${(page === "SFilter")?"active": ""}`} onClick={() => setPage("SFilter")}>
                    <i class="fa-solid fa-filter menu_item_icon"></i>
                    <p className="menu_item_name">Dashboard</p>
                </div>
                {/* Map */}
                <div className={`menu_item ${(page === "SMapVehicle" || page === "SMapItem")?"active": ""}`}>
                    <i class="fa-solid fa-map menu_item_icon"></i>
                    <p className="menu_item_name">Map</p>
                    <i class={`fa-solid fa-chevron-down ${(map)?"ulta":""}`} onClick={() => {openMap(map => !map)}}></i>
                </div>
                {/* Map Storage */}
                {
                    (map)?
                    <div className="map_sub">
                        <div className={`menu_item ${(page === "SMapItem")?"sub_active": ""}`} onClick={() => setPage("SMapItem")}>
                            <i class="fa-solid fa-landmark menu_item_icon"></i>
                            <p className="menu_item_name">Storage</p>
                        </div>
                        {/* Map Parking */}
                        <div className={`menu_item ${(page === "SMapVehicle")?"sub_active": ""}`} onClick={() => setPage("SMapVehicle")}>
                            <i class="fa-solid fa-motorcycle menu_item_icon"></i>
                            <p className="menu_item_name">Parking</p>
                        </div>
                    </div>:""
                }
                {/* Visitor Data */}
                <div className={`menu_item ${(page === "SVisitor")?"active": ""}`} onClick={() => setPage("SVisitor")}>
                    <i class="fa-solid fa-user menu_item_icon"></i>
                    <p className="menu_item_name">Visitor Data</p>
                </div>
                {/* Send Notifications */}
                <div className={`menu_item ${(page === "SendNotifications")?"active": ""}`} onClick={() => setPage("SendNotifications")}>
                    <i class="fa-solid fa-message menu_item_icon"></i>
                    <p className="menu_item_name">Send Notifications</p>
                </div>
                {/* Statistics */}
                <div className={`menu_item ${(page === "SStatistics")?"active": ""}`} onClick={() => setPage("SStatistics")}>
                    <i class="fa-solid fa-chart-line menu_item_icon"></i>
                    <p className="menu_item_name">Statistics</p>
                </div>
                {/* Log Out */}
                <div className="menu_item">
                    <i class="fa-solid fa-right-from-bracket menu_item_icon"></i>
                    <p className="menu_item_name">Log Out</p>
                </div>
            </div>
        </div>
    )
}

export default SuperSidebar;