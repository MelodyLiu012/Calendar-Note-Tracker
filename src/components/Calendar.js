import React from 'react'
import DayGrid from './DayGrid'

const Calendar = () => {
  return (
    <div
        style={{
            height: "83%",
            borderLeft: "4px solid rgba(0, 0, 0, 0.2)",
            borderRight: "4px solid rgba(0, 0, 0, 0.2)",
            aspectRatio: "7 / 5",
            padding: "0",
            // height: "80%"
        }}
    >
        <div style={weekStyle}>
            <DayGrid day={1}></DayGrid>
            <DayGrid day={2}></DayGrid>
            <DayGrid day={3}></DayGrid>
            <DayGrid day={4}></DayGrid>
            <DayGrid day={5}></DayGrid>
            <DayGrid day={6}></DayGrid>
            <DayGrid day={7}></DayGrid>
        </div>
        <div style={weekStyle}>
            <DayGrid day={1}></DayGrid>
            <DayGrid day={2}></DayGrid>
            <DayGrid day={3}></DayGrid>
            <DayGrid day={4}></DayGrid>
            <DayGrid day={5}></DayGrid>
            <DayGrid day={6}></DayGrid>
            <DayGrid day={7}></DayGrid>
        </div>
        <div style={weekStyle}>
            <DayGrid day={1}></DayGrid>
            <DayGrid day={2}></DayGrid>
            <DayGrid day={3}></DayGrid>
            <DayGrid day={4}></DayGrid>
            <DayGrid day={5}></DayGrid>
            <DayGrid day={6}></DayGrid>
            <DayGrid day={7}></DayGrid>
        </div>
        <div style={weekStyle}>
            <DayGrid day={1}></DayGrid>
            <DayGrid day={2}></DayGrid>
            <DayGrid day={3}></DayGrid>
            <DayGrid day={4}></DayGrid>
            <DayGrid day={5}></DayGrid>
            <DayGrid day={6}></DayGrid>
            <DayGrid day={7}></DayGrid>
        </div>
        <div style={weekStyle}>
            <DayGrid day={1}></DayGrid>
            <DayGrid day={2}></DayGrid>
            <DayGrid day={3}></DayGrid>
            <DayGrid day={4}></DayGrid>
            <DayGrid day={5}></DayGrid>
            <DayGrid day={6}></DayGrid>
            <DayGrid day={7}></DayGrid>
        </div>
        
    </div>
  )
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