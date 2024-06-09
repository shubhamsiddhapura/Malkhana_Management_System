import React, {useState} from "react";
import './App.css';
import SuperSidebar from "./superSidebar";
import SuperTopbar from "./superTopbar";
import SuperStatistics from "./superStatistics";
import SuperMapItem from "./superMapItem";
import SendNotifications from "./sendNotifications";
import SuperMapVehicle from "./superMapVehicle";
import SuperVisitor from "./superVisitor";
import SuperFilter from './superFilter';
import Notification from "./notification";

const SuperMain = () => {
    const [spage, setsPage] = useState("SFilter");
    return(
        <div className="main">
            <SuperSidebar setPage={setsPage} page={spage}/>
            <div className='working'>
            <SuperTopbar setPage={setsPage} page={spage}/>
            {
                (spage === "SFilter")?<SuperFilter />:
                (spage === "SMapItem")?<SuperMapItem />:
                (spage === "SMapVehicle")?<SuperMapVehicle />:
                (spage === "SVisitor")?<SuperVisitor />:
                (spage === "Notification")?<Notification />:
                (spage === "SendNotifications")?<SendNotifications />:<SuperStatistics />
            }
            </div>
        </div>
    )
}

export default SuperMain;