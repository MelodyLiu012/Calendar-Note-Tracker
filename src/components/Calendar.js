import React from 'react'

const Calendar = () => {
  return (
    <div
        style={{
            height: "83%",
            border: "2px solid rgba(0, 0, 0, 0.2)",
            aspectRatio: "7 / 5",
            padding: "0",
            // height: "80%"
        }}
    >
        <div style={weekStyle}>
            <div style={dayStyle}>
                1
            </div>
            <div style={dayStyle}>
                2
            </div>
            <div style={dayStyle}>
                3
            </div>
            <div style={dayStyle}>
                
            </div>
            <div style={dayStyle}>
                
            </div>
            <div style={dayStyle}>
                
            </div>
            <div style={dayStyle}>
                
            </div>
        </div>
        <div style={weekStyle}>
            <div style={dayStyle}>
                
            </div>
            <div style={dayStyle}>
                
            </div>
            <div style={dayStyle}>
                
            </div>
            <div style={dayStyle}>
                
            </div>
            <div style={dayStyle}>
                
            </div>
            <div style={dayStyle}>
                
            </div>
            <div style={dayStyle}>
                
            </div>
        </div>
        <div style={weekStyle}>
            <div style={dayStyle}>
                
            </div>
            <div style={dayStyle}>
                
            </div>
            <div style={dayStyle}>
                
            </div>
            <div style={dayStyle}>
                
            </div>
            <div style={dayStyle}>
                
            </div>
            <div style={dayStyle}>
                
            </div>
            <div style={dayStyle}>
                
            </div>
        </div>
        <div style={weekStyle}>
            <div style={dayStyle}>
                
            </div>
            <div style={dayStyle}>
                
            </div>
            <div style={dayStyle}>
                
            </div>
            <div style={dayStyle}>
                
            </div>
            <div style={dayStyle}>
                
            </div>
            <div style={dayStyle}>
                
            </div>
            <div style={dayStyle}>
                
            </div>
        </div>
        <div style={weekStyle}>
            <div style={dayStyle}>
                
            </div>
            <div style={dayStyle}>
                
            </div>
            <div style={dayStyle}>
                
            </div>
            <div style={dayStyle}>
                
            </div>
            <div style={dayStyle}>
                
            </div>
            <div style={dayStyle}>
                
            </div>
            <div style={dayStyle}>
                
            </div>
        </div>
        
    </div>
  )
}

const dayStyle = {
    margin: "0",
    display: "inline-block",
    width: 100/7 + "%",
    border: "1px rgba(0, 0, 0, 0.2) solid",
    boxSizing: "border-box",
    color: "rgba(0, 0, 0, 0.5)",
    padding: "0px 4px 4px 4px"
}

const weekStyle = {
    height: "20%",
    margin: "0",
    padding: "0",
    width: "100%",
    display: "flex",
    alignContent: "stretch"
}

export default Calendar