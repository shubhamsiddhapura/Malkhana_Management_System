import React, {useState} from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import Axios from "axios";
import Path from "./path";
import "./stats.css"

const Statistics = () => {
    const location = useLocation();
    const [stats, setStats] = useState(null);
    const getStats = async () => {
        await Axios.post("http://localhost:5000/getStats", {
            ps: location.state
        }).then(res => {
            setStats(res.data);
        });
    }
    getStats();
    return(
        <div className="statistics">
            <Path cur_page = "Statistics" cur_path = "Home / Statistics / " />
            <div className="statistics_main filtered_data">
                {
                    (stats === null)?"Loading":
                    <div className="stats_grid_container">
                        <div  id="item_count">
                            <div className="stat_key">Item Count</div>
                            <div className="stat_value">{stats.item_count}</div>
                        </div>
                        <div  id="vehicle_count">
                            <div className="stat_key">Vehicle Count</div>
                            <div className="stat_value">{stats.vehicle_count}</div>
                        </div>
                        <div className="bsb"  id="top_cat">
                            <div className="stat_key" id="top_cat">Top Category</div>
                            <div className="stat_value">{stats.top_category}</div>
                        </div>
                        <div  className="asa">
                            <div className="stat_key">Storage Full</div>
                            <div className="stat_value">{stats.storage_full.toFixed(2)} %</div>
                        </div>
                        <div>
                            <div className="stat_key">Storage Empty</div>
                            <div className="stat_value">{stats.storage_empty.toFixed(2)} %</div>
                        </div>
                        <div  className="asa">
                            <div className="stat_key">Parking Full</div>
                            <div className="stat_value">{stats.parking_full.toFixed(2)} %</div>
                        </div>
                        <div  className="asa">
                            <div className="stat_key">Parking Empty</div>
                            <div className="stat_value">{stats.parking_empty.toFixed(2)} %</div>
                        </div>
                        <div  id="audit">
                            <div className="stat_key">Audit</div>
                            <div className="stat_value">0</div>
                        </div>
                        <div className="bsb"  id="wheel2">
                            <div className="stat_key">2 Wheeler</div>
                            <div className="stat_value">{stats.scooty_count}</div>
                        </div>
                        <div className="bsb"  id="wheel4">
                            <div className="stat_key">3 / 4 Wheeler</div>
                            <div className="stat_value">{stats.car_count}</div>
                        </div>
                        <div  className="asa" id="wheel6">
                            <div className="stat_key">Heavy Vehicles</div>
                            <div className="stat_value">{stats.truck_count}</div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Statistics;