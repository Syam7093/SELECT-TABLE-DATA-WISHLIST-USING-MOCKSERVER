import React, { useEffect, useState } from 'react'
import axios from "axios"
import PaginationPage from './PaginationPage'

const DataPage = () => {
    const [show,setshow]=useState([])
    const [input,setinput]=useState('')
    const [main,setmain]=useState([])
    useEffect(()=>{
        showdataOn()
    },[])

    const showdataOn=async()=>{
        const data=await axios.get("https://fakestoreapi.com/products")
        setshow(data.data)

    }

    const handleChange=(e,)=>{
        setinput(e.target.value)
        // console.log(b,"sss")
    }

    const filterdata=show.filter((e)=>{
        return e.title.toLowerCase().includes(input.toLowerCase())
    })

const childtoparent=(e)=>{
    console.log(e,"ravi")
    setmain(e)

}




  return (
    <div>


        <div>
            
        </div>
        <input type="text" onChange={(e)=>{handleChange(e)}} ></input>
  <div>

    {main.map((e)=>{
        return (
            <div>
                <h5>{e.price}</h5>
                <img src={e.image} height="40px" width="40px"></img>
                <p>{e.tile}</p>
            </div>
        )
    })}
  </div>
  <PaginationPage filterdata={filterdata} childtoparent={childtoparent}></PaginationPage>
    </div>
  )
}

export default DataPage