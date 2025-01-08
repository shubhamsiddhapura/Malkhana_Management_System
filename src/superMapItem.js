import React, { useState } from "react";
import Path from "./path";
import Axios from 'axios';
import "./item_map.css"
import {useLocation, useNavigate, useSearchParams} from 'react-router-dom';

const SuperMapItem = () => {
    const [tat, setTat] = useState(true);
    const [data, setData] = useState(null);
    const location = useLocation();
    const handleMap = async () => {
        await Axios.post("http://localhost:5000/findMap", {
            ps: "Manjalpur"
        }).then(res => {
            setData(res.data);
        })
    }

    const handleJp = async () => {
        await Axios.post("http://localhost:5000/findMap", {
            ps: "JP Road"
        }).then(res => {
            setData(res.data);
        })
    } 

    const handleSay = async () => {
        await Axios.post("http://localhost:5000/findMap", {
            ps: "Sayajiganj"
        }).then(res => {
            setData(res.data);
        })
    } 

    const handleRao = async () => {
        await Axios.post("http://localhost:5000/findMap", {
            ps: "Raopura"
        }).then(res => {
            setData(res.data);
        })
    } 

    const handleGot = async () => {
        await Axios.post("http://localhost:5000/findMap", {
            ps: "Gotri"
        }).then(res => {
            setData(res.data);
        })
    } 

    const handleMan = async () => {
        await Axios.post("http://localhost:5000/findMap", {
            ps: "Manjalpur"
        }).then(res => {
            setData(res.data);
        })
    } 

    if(tat){
        handleMap();
        setTat(false);
    }
    return(
        <div className="super_smap_div">
            <Path cur_page = "Storage Map" cur_path = "Home / Map / Storage Map /" />
            <div className="item_map_div filtered_data">
            <div className="map_buttons">
                <button onClick={handleMan}>MANJALPUR</button>
                <button onClick={handleJp}>JP ROAD</button>
                <button onClick={handleSay}>SAYAJIGANJ</button>
                <button onClick={handleRao}>RAOPURA</button>
                <button onClick={handleGot}>GOTRI</button>
            </div>
            {
                (data === null)?"Loading":
                <div className="map_area">
                    <div className="left_side">
                        <div className="grid_container_0">
                            <div class={(data.c1[1] === 540)?"et":(data.c1 === 0)?"fl":"pt"} id="c1">C1</div>
                        </div>
                        <div className="grid_container_1">
                            <div class= {(data.a1[1] === 126)?"et":(data.a1 === 0)?"fl":"pt"}>A1</div>
                            <div class= {(data.a2[1] === 126)?"et":(data.a2 === 0)?"fl":"pt"}>A2</div>
                            <div class= {(data.a3[1] === 126)?"et":(data.a3 === 0)?"fl":"pt"}>A3</div>
                            <div class= {(data.a4[1] === 126)?"et":(data.a4 === 0)?"fl":"pt"}>A4</div>
                            <div class= {(data.a5[1] === 126)?"et":(data.a5 === 0)?"fl":"pt"}>A5</div>
                            <div class= {(data.a6[1] === 126)?"et":(data.a6 === 0)?"fl":"pt"}>A6</div>
                            <div class= {(data.a7[1] === 126)?"et":(data.a7 === 0)?"fl":"pt"}>A7</div>
                            <div class= {(data.a8[1] === 126)?"et":(data.a8 === 0)?"fl":"pt"}>A8</div>
                            <div class= {(data.a9[1] === 126)?"et":(data.a9 === 0)?"fl":"pt"}>A9</div>
                            <div class= {(data.b1[1] === 126)?"et":(data.b1 === 0)?"fl":"pt"}>B1</div>
                            <div class= {(data.b2[1] === 126)?"et":(data.b2 === 0)?"fl":"pt"}>B2</div>
                            <div class= {(data.b3[1] === 126)?"et":(data.b3 === 0)?"fl":"pt"}>B3</div>
                        </div>
                    </div>
                    <div className="center_side">
                        <div className="grid_container_2">
                            <div class={(data.d1[1] === 50.4)?"et":(data.d1 === 0)?"fl":"pt"}>D1</div>
                            <div class={(data.d2[1] === 50.4)?"et":(data.d2 === 0)?"fl":"pt"}>D2</div>
                            <div class={(data.d3[1] === 50.4)?"et":(data.d3 === 0)?"fl":"pt"}>D3</div>
                            <div class={(data.d4[1] === 50.4)?"et":(data.d4 === 0)?"fl":"pt"}>D4</div>
                            <div class={(data.d5[1] === 50.4)?"et":(data.d5 === 0)?"fl":"pt"}>D5</div>
                            <div class={(data.d6[1] === 50.4)?"et":(data.d6 === 0)?"fl":"pt"}>D6</div>
                            <div class={(data.d7[1] === 50.4)?"et":(data.d7 === 0)?"fl":"pt"}>D7</div>
                            <div class={(data.d8[1] === 50.4)?"et":(data.d8 === 0)?"fl":"pt"}>D8</div>
                            <div class={(data.d9[1] === 50.4)?"et":(data.d9 === 0)?"fl":"pt"}>D9</div>
                            <div class={(data.d10[1] === 50.4)?"et":(data.d10 === 0)?"fl":"pt"}>D10</div>
                            <div class={(data.d11[1] === 50.4)?"et":(data.d11 === 0)?"fl":"pt"}>D11</div>
                            <div class={(data.d12[1] === 50.4)?"et":(data.d12 === 0)?"fl":"pt"}>D12</div>
                            <div class={(data.d13[1] === 50.4)?"et":(data.d13 === 0)?"fl":"pt"}>D13</div>
                            <div class={(data.d14[1] === 50.4)?"et":(data.d14 === 0)?"fl":"pt"}>D14</div>
                            <div class={(data.d15[1] === 50.4)?"et":(data.d15 === 0)?"fl":"pt"}>D15</div>
                            <div class={(data.e1[1] === 50.4)?"et":(data.e1 === 0)?"fl":"pt"}>E1</div>
                            <div class={(data.e2[1] === 50.4)?"et":(data.e2 === 0)?"fl":"pt"}>E2</div>
                            <div class={(data.e3[1] === 50.4)?"et":(data.e3 === 0)?"fl":"pt"}>E3</div>
                            <div class={(data.e4[1] === 50.4)?"et":(data.e4 === 0)?"fl":"pt"}>E4</div>
                            <div class={(data.e5[1] === 50.4)?"et":(data.e5 === 0)?"fl":"pt"}>E5</div>
                            <div class={(data.e6[1] === 50.4)?"et":(data.e6 === 0)?"fl":"pt"}>E6</div>
                            <div class={(data.e7[1] === 50.4)?"et":(data.e7 === 0)?"fl":"pt"}>E7</div>
                            <div class={(data.e8[1] === 50.4)?"et":(data.e8 === 0)?"fl":"pt"}>E8</div>
                            <div class={(data.e9[1] === 50.4)?"et":(data.e9 === 0)?"fl":"pt"}>E9</div>
                            <div class={(data.e10[1] === 50.4)?"et":(data.e10 === 0)?"fl":"pt"}>E10</div>
                        </div>
                    </div>
                    <div className="right_side">
                        <div className="grid_container_3">
                            <div class={(data.f1[1] === 201.6)?"et":(data.f1 === 0)?"fl":"pt"}>F1</div>
                            <div class={(data.f2[1] === 201.6)?"et":(data.f2 === 0)?"fl":"pt"}>F2</div>
                            <div class={(data.f3[1] === 201.6)?"et":(data.f3 === 0)?"fl":"pt"}>F3</div>
                            <div class={(data.f4[1] === 201.6)?"et":(data.f4 === 0)?"fl":"pt"}>F4</div>
                            <div class={(data.f5[1] === 201.6)?"et":(data.f5 === 0)?"fl":"pt"}>F5</div>
                            <div class={(data.f6[1] === 201.6)?"et":(data.f6 === 0)?"fl":"pt"}>F6</div>
                            <div class={(data.g1[1] === 151.2)?"et":(data.g1 === 0)?"fl":"pt"} id="g1">
                                <div class={(data.g1[1] === 151.2)?"et":(data.g1 === 0)?"fl":"pt"}>G1</div>
                            </div>
                        </div>
                        <div className="grid_container_5">
                            <div class={(data.c2[1] === 540)?"et":(data.c2 === 0)?"fl":"pt"} id="c2">C2</div>
                        </div>
                    </div>
                </div>
            }
            </div>
        </div>
    )
}

export default SuperMapItem;