import React, {useState} from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import Axios from "axios";
import Path from "./path";

const SuperStatistics = () => {
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
        <div className="super_statistics_div">
            <Path cur_page = "Statistics" cur_path = "Home / Statistics / " />
            <div className="super_statistics_main">
            <div className="statistics_main filtered_data">
                {
                    (stats === null)?"Loading":
                    <div className="stats_grid_container">
                        <div  id="item_count">
                            <div className="stat_key">Item Count</div>
                            <div className="stat_value">{stats.total_item_count}</div>
                        </div>
                        <div  id="vehicle_count">
                            <div className="stat_key">Vehicle Count</div>
                            <div className="stat_value">{stats.total_vehicle_count}</div>
                        </div>
                        <div className="bsb"  id="top_cat">
                            <div className="stat_key" id="top_cat">Top Category</div>
                            <div className="stat_value">{stats.top_category}</div>
                        </div>
                        <div  className="asa">
                            <div className="stat_key">Manjalpur Item Count</div>
                            <div className="stat_value">{stats.manjalpur_item_count}</div>
                        </div>
                        <div>
                            <div className="stat_key">Manjalpur Vehicle Count</div>
                            <div className="stat_value">{stats.manjalpur_vehicle_count}</div>
                        </div>
                        <div  className="asa">
                            <div className="stat_key">Gotri Item Count</div>
                            <div className="stat_value">{stats.gotri_item_count}</div>
                        </div>
                        <div>
                            <div className="stat_key">Gotri Vehicle Count</div>
                            <div className="stat_value">{stats.gotri_vehicle_count}</div>
                        </div>
                        <div  className="asa">
                            <div className="stat_key">JP Road Item Count</div>
                            <div className="stat_value">{stats.jp_item_count}</div>
                        </div>
                        <div>
                            <div className="stat_key">JP Road Vehicle Count</div>
                            <div className="stat_value">{stats.jp_vehicle_count}</div>
                        </div>
                        <div  className="asa">
                            <div className="stat_key">Sayajiganj Item Count</div>
                            <div className="stat_value">{stats.sayajiganj_item_count}</div>
                        </div>
                        <div>
                            <div className="stat_key">Sayajiganj Vehicle Count</div>
                            <div className="stat_value">{stats.sayajiganj_vehicle_count}</div>
                        </div>
                        <div  className="asa">
                            <div className="stat_key">Raopura Item Count</div>
                            <div className="stat_value">{stats.raopura_item_count}</div>
                        </div>
                        <div>
                            <div className="stat_key">Raopura Vehicle Count</div>
                            <div className="stat_value">{stats.raopura_vehicle_count}</div>
                        </div>
                    </div>
                }
            </div>
            </div>
        </div>
    )
}

export default SuperStatistics;