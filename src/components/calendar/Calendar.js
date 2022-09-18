import React, { useEffect, useState } from 'react'
import DayGrid from './DayGrid'

const Calendar = ({ date, setDate }) => {
	const [gridData, setGridData] = useState([
		// {
		// 	day: 1,
		// 	thumbnail: {
		// 		type: "image",
		// 		content: "../assets/placeholders/placeholder_1.jpg"
		// 	}
		// },
		{
			day: 2,
			thumbnail: {
				type: "text",
				content: "This is thumbnail text for day 2."
			}
		},
		{
			day: 3,
			thumbnail: {
				type: "text",
				content: "This is thumbnail text for day 3."
			}
		},
		// {
		// 	day: 4,
		// 	thumbnail: {
		// 		type: "image",
		// 		content: "../assets/placeholders/placeholder_4.jpg"
		// 	}
		// },
		// {
		// 	day: 5,
		// 	thumbnail: {
		// 		type: "image",
		// 		content: "../assets/placeholders/placeholder_5.jpg"
		// 	}
		// },
		// {
		// 	day: 6,
		// 	thumbnail: {
		// 		type: "image",
		// 		content: "../assets/placeholders/placeholder_3.jpg"
		// 	}
		// },
		// {
		// 	day: 7,
		// 	thumbnail: {
		// 		type: "image",
		// 		content: "../assets/placeholders/placeholder_2.jpg"
		// 	}
		// }
	])
	const [displacement, setDisplacement] = useState(1); // placeholder value

	useEffect( () => {
		// fetch data for current month
	})
	
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
      {
				[...Array(5)].map((x, i) => {
					return (
						<div style={weekStyle}>
							<DayGrid /*key={1*i}*/ day={-1} thumbnail={gridData[1/*i-displacement*/].thumbnail}></DayGrid>
							<DayGrid /*key={2*i}*/ day={-2} thumbnail={gridData[1/*i-displacement*/].thumbnail}></DayGrid>
							<DayGrid /*key={3*i}*/ day={-3} thumbnail={gridData[1/*i-displacement*/].thumbnail}></DayGrid>
							<DayGrid /*key={4*i}*/ day={-4} thumbnail={gridData[1/*i-displacement*/].thumbnail}></DayGrid>
							<DayGrid /*key={5*i}*/ day={-5} thumbnail={gridData[1/*i-displacement*/].thumbnail}></DayGrid>
							<DayGrid /*key={6*i}*/ day={-6} thumbnail={gridData[1/*i-displacement*/].thumbnail}></DayGrid>
							<DayGrid /*key={7*i}*/ day={-7} thumbnail={gridData[1/*i-displacement*/].thumbnail}></DayGrid>
						</div>
					);
				})
			}

			{/* <div style={weekStyle}>
				<DayGrid key={0} day={1}></DayGrid>
				<DayGrid key={0} day={2}></DayGrid>
				<DayGrid key={0} day={3}></DayGrid>
				<DayGrid key={0} day={4}></DayGrid>
				<DayGrid key={0} day={5}></DayGrid>
				<DayGrid key={0} day={6}></DayGrid>
				<DayGrid key={0} day={7}></DayGrid>
			</div> */}
        
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