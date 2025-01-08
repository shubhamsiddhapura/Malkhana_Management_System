import React from "react";
import "./path.css"

const Path = ({cur_page, cur_path}) => {
    return(
        <div className="path_div">
            <p className="page_name">{cur_page}</p>
            <p className="page_path">{cur_path}</p>
        </div>
    )
}

export default Path;