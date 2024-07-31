import React, { useState } from 'react'

const PaginationPage = ({filterdata,childtoparent}) => {
  
    const [currentpage,setcurrentpage]=useState(1)
    const itemperpage=3
    const indexoflastitem=currentpage*itemperpage
    const indexoffirstitem=indexoflastitem-itemperpage
    const currentdata=filterdata.slice(indexoffirstitem,indexoflastitem)
    childtoparent(currentdata)

    const pagenumbers=[]
    for(let i=1;i<filterdata.length/itemperpage;i++)
    {
        pagenumbers.push(i)
    }

    

  return (
    <div>
       {pagenumbers.map((number)=>{
        return(
            <div>
                <button>{number}</button>
            </div>
        )
       })}
    </div>
  )
}

export default PaginationPage