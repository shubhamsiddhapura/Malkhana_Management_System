import React, {useState} from "react";
import './App.css';
import Sidebar from './sidebar';
import Topbar from './topbar';
import Filter from './filterpage';
import AddItem from './additem';
import AddVehicle from './addvehicle';
import MapItem from './mapitem';
import MapVehicle from './mapvehicle';
import Visitor from './visitor';
import AfterCreate from "./afterCreate";
import Remove from './remove';
import Statistics from './statistics';
import Notification from "./notification";

const Main = () => {
    const [page, setPage] = useState("Filter");
    const [place, setPlace] = useState("");
    const [barcode, setBarcode] = useState();
    const [success, setSuccess] = useState(false);
    return(
        <div className="main">
            <Sidebar setPage={setPage} page={page}/>
            <div className='working'>
            <Topbar setPage={setPage} page={page}/>
            {
                (page === "Filter")?<Filter />:
                (page === "AddItem")?<AddItem setPage={setPage} setPlace = {setPlace} setBarcode={setBarcode} setSuccess={setSuccess}/>:
                (page === "AfterCreate")?<AfterCreate place={place} success={success} barcode={barcode}/>:
                (page === "AddVehicle")?<AddVehicle setPage={setPage} setPlace = {setPlace} setBarcode={setBarcode} setSuccess={setSuccess}/>:
                (page === "MapItem")?<MapItem />:
                (page === "MapVehicle")?<MapVehicle />:
                (page === "Visitor")?<Visitor />:
                (page === "Notification")?<Notification />:
                (page === "Remove")?<Remove />:<Statistics />
            }
            </div>
        </div>
    )
}

export default Main;