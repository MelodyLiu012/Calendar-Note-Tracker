import React from 'react'
import { IoSearchSharp } from 'react-icons/io5'

const MonthYearLabel = ({ month, year }) => {
  return (
    <div 
        className="font-inconsolata"
        style={{
            height: "5%",
            fontSize: "1.7em",
            textAlign: "left", 
            fontWeight: "bold",
            paddingBlock: "2.5%",
            display: "flex",
            alignItems: 'center'
        }}
    >
        {month} {year} 

        <IoSearchSharp 
            style={searchIconStyle}
            onMouseEnter={()=>{}}
            onMouseDown={()=>{}}
        />
    </div>
  )
}

const searchIconStyle = {
    width: "0.8em", 
    color: "rgba(0, 0, 0, 0.6)",
    marginLeft: "1%"
}

export default MonthYearLabel