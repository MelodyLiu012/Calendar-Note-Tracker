import {React, useEffect, useState} from 'react'

const MonthSelectOption = ({monthText}) => {
    const [style, setStyle] = useState(monthSelectDefaultStyle);
    const [selected, setSelected] = useState(false);

    return (
        <div 
            className='font-inconsolata'
            style={style}
            onPointerOver={ () => {
                setStyle(monthHoveredStyle);
            }}
            onPointerOut={ () => {
                if (selected) {
                    setStyle(monthSelectedStyle);
                }
                else {
                    setStyle(monthSelectDefaultStyle);
                }
            }}
            onClick={ () => {
                setStyle(monthSelectedStyle);
                setSelected(true);
            }}
        >
            {monthText}
        </div>
    )
}

const monthSelectDefaultStyle = {
    marginTop: "0.5vh",
    marginBottom: "0.5vh",
    paddingTop: "1.5vh",
    paddingBottom: "1.5vh",
    paddingLeft: "5vh",
    paddingRight: "5vh",
    fontSize: "1.3em",
    color: "gray",
    cursor: "default",
    backgroundColor: "transparent"
}

const monthHoveredStyle = {
    marginTop: "0.5vh",
    marginBottom: "0.5vh",
    paddingTop: "1.5vh",
    paddingBottom: "1.5vh",
    paddingLeft: "5vh",
    paddingRight: "5vh",
    fontSize: "1.3em",
    color: "white",
    cursor: "pointer",
    backgroundColor: "rgba(0, 0, 0, 0.3)"
}

const monthSelectedStyle = {
    marginTop: "0.5vh",
    marginBottom: "0.5vh",
    paddingTop: "1.5vh",
    paddingBottom: "1.5vh",
    paddingLeft: "5vh",
    paddingRight: "5vh",
    fontSize: "1.3em",
    color: "black",
    backgroundColor: "transparent",
    borderLeft: "5px black solid",
    fontWeight: "bold"
}

export default MonthSelectOption