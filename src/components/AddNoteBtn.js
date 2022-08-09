import { useState } from "react";
import {FaPlus} from "react-icons/fa"

const AddNoteBtn = () => {
    const [hovering, setHovering] = useState(false);

    return (
        <div style={{
            position: "absolute",
            right: "3%",
            top: "3%",
            width: "10px",
            height: "10px",
            // border: "2px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div
                style={{
                    position: 'fixed',
                    color: "white",
                    backgroundColor:  "rgb(170, 170, 170)", 
                    width: "30px",
                    height: "30px",
                    borderRadius: "10px",
                    border: hovering ? "2px solid rgb(200, 200, 200)" : "2px solid rgb(150, 150, 150)",
                    
                    cursor: hovering ? "pointer" : "default",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                onMouseEnter={() => {setHovering(true)}}
                onMouseLeave={() => {setHovering(false)}}
            >
                
                <FaPlus />
            </div>
            
        </div>
    )
}

export default AddNoteBtn;