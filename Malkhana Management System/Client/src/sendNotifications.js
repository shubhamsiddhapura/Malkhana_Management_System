import React, {useState} from "react";
import  Axios  from "axios";
import Path from "./path";
import './sendnoti.css'

const SendNotifications = () => {
    const [mes, setMes] = useState("");
    const [all, setAll] = useState(false);
    const [a1, setA1] = useState(false);
    const [a2, setA2] = useState(false);
    const [a3, setA3] = useState(false);
    const [a4, setA4] = useState(false);
    const [a5, setA5] = useState(false);
    const [alert, setAlert] = useState("");
    
    const handleSend = async () => {
        await Axios.post("http://localhost:5000/addmessage", {
            mes: mes,
            all: all,
            a1: a1,
            a2: a2,
            a3: a3,
            a4: a4,
            a5: a5
        }).then(res => {
            console.log(res.data);
            setAlert("Message Sent Successflully");
            setTimeout(hatao, 5000);
            function hatao(){
                setAlert("");
            }
            setA1(false);
            setA2(false);
            setA3(false);
            setA4(false);
            setA5(false);
            setAll(false);
            setMes("");
        })
    }
    return(
        <div className="send_notifications_div">
            <Path cur_page = "Send Notifications" cur_path = "Home / Send Notifications / " />
            <div className="send_notifications_main filtered_data">
                {alert}
                <div>
                    <p className="do_message">Message</p>
                    <input className="do_message_input" type="text" onChange={(e) => {setMes(e.target.value)}} />
                </div>
                <div className="senders">
                <div>
                    <p>All</p>
                    <input type="checkbox" onChange={(e) => {setAll(!all)}} />
                </div>
                <div>
                    <p>Manjalpur</p>
                    <input disabled={(all)?'true': ''} type="checkbox" onChange={(e) => {setA1(!a1)}}/>
                </div>
                <div>
                    <p>JP Road</p>
                    <input disabled={(all)?'true': ''} type="checkbox" onChange={(e) => {setA2(!a2)}}/>
                </div>
                <div>
                    <p>Sayajiganj</p>
                    <input disabled={(all)?'true': ''} type="checkbox" onChange={(e) => {setA3(!a3)}}/>
                </div>
                <div>
                    <p>Raopura</p>
                    <input disabled={(all)?'true': ''} type="checkbox" onChange={(e) => {setA4(!a4)}}/>
                </div>
                <div>
                    <p>Gotri</p>
                    <input disabled={(all)?'true': ''} type="checkbox" onChange={(e) => {setA5(!a5)}}/>
                </div>
                </div>
                <button className="jaa" onClick={handleSend}>SEND</button>
            </div>
        </div>
    )
}

export default SendNotifications;