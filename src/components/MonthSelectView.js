import React from 'react'
import MonthSelectOption from './MonthSelectOption'

const MonthSelectView = () => {
  return (
    <div style={{
      width: "15vw", 
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-end",
      // borderRight: "0.1em darkgray solid"
    }}>
      <MonthSelectOption monthText="Jan"/>
      <MonthSelectOption monthText="Feb"/>
      <MonthSelectOption monthText="Mar"/>
      <MonthSelectOption monthText="Apr"/>
      <MonthSelectOption monthText="May"/>
      <MonthSelectOption monthText="Jun"/>
      <MonthSelectOption monthText="Jul"/>
      <MonthSelectOption monthText="Aug"/>
      <MonthSelectOption monthText="Sep"/>
      <MonthSelectOption monthText="Oct"/>
      <MonthSelectOption monthText="Nov"/>
      <MonthSelectOption monthText="Dec"/>
    </div>
  )
}

export default MonthSelectView