import React, {useState} from "react";
import Axios from 'axios';
import Path from "./path";

const SuperVisitor = () => {
    const [date, setDate] = useState("");
    const  [tat, setTat] = useState(true);
    const [data, setData] = useState();
    const handleToday = async () => {
        await Axios.post("http://localhost:5000/todaysVisitor", {
        }).then(res => {
            setData(res.data)
        })
    }

    const handleDate = async () => {
        await Axios.post("http://localhost:5000/datesVisitor", {
            date: date
        }).then(res => {
            setData(res.data)
        })
    }

    const handleAll = async () => {
        await Axios.post("http://localhost:5000/allsVisitor", {
        }).then(res => {
            setData(res.data)
        })
    }

    const handleNow = async () => {
        await Axios.post("http://localhost:5000/nowsVisitor", {
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
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default SuperVisitor;