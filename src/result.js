import React, {useState, useEffect, } from "react";
import Axios from 'axios';

const Result = () => {
    
    const [data, setData] = useState();
    const [inp, setInp] = useState();
    const handleClick = () => {
        Axios.post("http://localhost:5000/go", {
            name: "Nakul",
            num: 20
        })
    }
    useEffect(() => {
        fetch("/aao").then(
          response => response.json()
        ).then(
          data => {
            setData(data);
          }
        )
      }, []);
      console.log(data);
    return(
        <div>
        {
            (data === undefined)?<div>Loading</div>:
            <div>
            {
                data.map((item) => (
                        <p>{item.name}</p>
                ))
            }
            </div>
        }

        <button onClick={handleClick}>READY</button>
        </div>
    )
}

export default Result;