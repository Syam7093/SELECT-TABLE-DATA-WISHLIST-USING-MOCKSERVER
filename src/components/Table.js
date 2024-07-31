import React, { useState } from "react";
import GradeIcon from "@mui/icons-material/Grade";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { DataGrid } from "@mui/x-data-grid";
// import "../"


const Table = () => {
  const [data, setdata] = useState([
    { name: "syam", status: false },
    { name: "ram", status: false },
    { name: "bheem", status: false },
    { name: "ramesh", status: false },
    { name: "suresh", status: false },
    { name: "somesh", status: false },
    { name: "praven", status: false },
    { name: "jam", status: false },
    { name: "balu", status: true },
    ,
  ]);

  // console.log(data,"data")

  const [one, setone] = useState(false);
  const tab = ["Table", "Whistlist"];
  const [status, setstatus] = useState("Table");
  const [show, setshow] = useState([]);

  const handledtab = (tabs) => {
    // console.log(tabs,"som")
    setstatus(tabs);
  };

  const handlechangestatus = (s) => {
    const change = data.map((e) => {
      return e.name == s.name ? { ...e, status: !e.status } : e;
    });
    setdata(change);
  };
  let fill =
    status === "Table"
      ? data
      : data.filter((e) => {
          return e.status == true;
        });

  const star = (s) => {
    setone(false);
  };

  const star1 = () => {
    setone(true);
  };

  return (
    <div>
     
      <div></div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {tab.map((e) => {
          return (
            <div>
              <button
                onClick={() => {
                  handledtab(e);
                }}
              >
                {e}
              </button>
            </div>
          );
        })}
      </div>

      <table id="customers">
  <tr>
    <th>Name</th>
    <th>Favourite</th>
    
  </tr>
  
  
 
  

      {fill.map((e) => {
        return (

            <tr>
    <td onClick={() => {
               handlechangestatus(e);
               console.log(e.status, "s----------");
              console.log(fill, "ssss");
              }}>
    {e.name} 
    </td>
    <td> {e.status ? (
             <GradeIcon></GradeIcon>
           ) : (
               <StarBorderIcon></StarBorderIcon>
            )}</td>
    {/* <td>Germany</td> */}
  </tr>
        //   <div
        //     style={{
        //       display: "flex",
        //       flexDirection: "row",
        //       justifyContent: "center",
        //       alignItems: "center",
        //     }}
        //   >
        //     <button
        //       onClick={() => {
        //         handlechangestatus(e);
        //         console.log(e.status, "s----------");
        //         console.log(fill, "ssss");
        //       }}
        //       style={{ margin: "5px" }}
        //     >
        //       {e.name}
        //     </button>

        //     {e.status ? (
        //       <GradeIcon></GradeIcon>
        //     ) : (
        //       <StarBorderIcon></StarBorderIcon>
        //     )}

        //     {/* StarBorderIcon */}
        //   </div>
        );
      })}
      </table>
    </div>
  );
};

export default Table;
