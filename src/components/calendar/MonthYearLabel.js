import React, { useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'

const MonthYearLabel = ({ month, year, onSearchClicked }) => {

  return (
    <div 
      style={{
        height: "5%",
        fontSize: "1.8em",
        textAlign: "left", 
        fontWeight: "bold",
        paddingBlock: "2%",
        display: "flex",
        alignItems: 'center'
      }}
    >
      {month} {year} 
  
      <div className="toolBtn" style={{marginLeft: "1%"}}>
        <IoSearchSharp 
          style={{width: "25px"}}
          onMouseDown={onSearchClicked}
        />
      </div>
        
    </div>
  )
}


export default MonthYearLabel