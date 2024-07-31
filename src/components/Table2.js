import React, { useEffect, useState } from 'react'
import GradeIcon from "@mui/icons-material/Grade";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Graph from './Graph';
import axios from "axios"

// import PieChartWithCenterLabel from '../utils';



const Table2 = () => {
    const tableStyle = {
        borderCollapse: 'collapse',
        width: '100%',
        
    };

    const cellStyle = {
        border: '1px solid black',
        textAlign: 'center',
        padding: '8px',
        backgroundColor:"grey",
        color:"black",
        fontWeight:"bold"
        
    };
    useEffect(()=>{
        alluserdata()
    },[])

    const alluserdata=async()=>{
    
        let userdata=await axios.get("http://localhost:8989/users")
        console.log(userdata.data)
        setdata(userdata?.data)

    }

    

    const [data, setdata] = useState([]);

    const tab = ["TABLE", "FAVOURITE"];
    const [tabs, settabs] = useState("TABLE");

    const handleclickdata = (s) => {
        settabs(s);
    };

    const filterdata = tabs === "TABLE" ? data : data.filter((e) => e.status === true);

    const statustrue = (k) => {
        const one = data.map((e) => {
            return e === k ? { ...e, status: !e.status } : e;
        });
        setdata(one);
    };
    let syam=data.filter((e)=>{
        return e.status===true
    })
    let syam1=data.filter((e)=>{
        return e.status===false
    })
    console.log(syam.length,"syam")
    console.log(syam1.length,"jam")

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                {tab.map((e) => {
                    return (
                        <div key={e}>
                            <button
                                onClick={() => handleclickdata(e)}
                                style={{ width: "100px", margin: "5px", padding: "5px",backgroundColor:"green",color:"white",fontWeight:"bold",borderRadius:"5px" }}
                            >
                                {e}
                            </button>
                        </div>
                    );
                })}
            </div>

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <table style={tableStyle}>
                    {filterdata.length >= 1 && (
                        <thead>
                            <tr style={cellStyle}>
                                <th  style={cellStyle}>NAME</th>
                                <th style={cellStyle}>Gender</th>
                                <th style={cellStyle}>Mobile</th>
                                <th style={cellStyle}>FAVOURITE</th>
                            </tr>
                        </thead>
                    )}
                    <tbody>
                        {filterdata.map((e) => {
                            return (
                                <tr key={e.name} style={cellStyle}>
                                    <td style={cellStyle}>{e.name}</td>
                                    <td style={cellStyle}>{e.gender}</td>
                                    <td style={cellStyle}>{e.mobile}</td>
                                    <td style={cellStyle} onClick={() => statustrue(e)}>
                                        {e.status ? <GradeIcon sx={{ color:"gold" }} /> : <StarBorderIcon  />}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <Graph syam={syam} syam1={syam1}></Graph>
        </div>
    );
};

export default Table2;



