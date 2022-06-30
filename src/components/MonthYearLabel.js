import React, { useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'

const MonthYearLabel = ({ month, year, onSearchClicked }) => {
    const [searchStyle, setSearchStyle] = useState(searchIconStyle);
    
    return (
        <div 
            className="font-inconsolata"
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

            <IoSearchSharp 
                style={searchStyle}
                onMouseEnter={ () => {
                    setSearchStyle({...searchIconStyle, color: "white", cursor: "pointer"})
                }}
                onMouseLeave={ () => {
                    setSearchStyle({...searchIconStyle, color: "gray", cursor: "pointer"})
                }}
                onMouseDown={onSearchClicked}
            />
        </div>
    )
}

const searchIconStyle = {
    width: "0.8em", 
    marginLeft: "1%",
    color: "rgba(0, 0, 0, 0.6)",
    cursor: "default"
}

export default MonthYearLabel