import { React, useState} from "react";

const Notecard = ({ dayNote, setEditorState }) => {
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false); // add style to clicked state?

    return (
        <div 
            onClick={() => {
                setEditorState({ 
                    isNoteSelected: true,
                    selectedIndex: dayNote.index
                });
            }}
            onPointerEnter={() => {
                setHovered(true);
            }}
            onPointerLeave={() => {
                setHovered(false);
            }}
            style={{
                border: hovered ? "2px solid gray": "2px solid lightgray",
                borderRadius: "10px",
                height: "35%",
                marginTop: "4%",
                width: "100%",
                overflow: "hidden",
                backgroundColor: "rgba(255, 255, 255, 0.6)",
            }}
        >

            <div 
                style={{
                    lineHeight: "1.3em",
                    overflow: "auto",
                    height: "90%",
                    padding: "2% 4% 2% 4%",
                    boxSizing: "border-box",
                    cursor: hovered ? "pointer": "default",
                    scrollbarWidth: "none"
                }}
            >
                {dayNote.text}
            </div>

            <div style={{
                textAlign: "right",
                backgroundColor: "rgba(150, 150, 150, 0.8)",
                padding: "3px 3% 3px 3px",
                fontSize: "0.85em",
                borderTop: "2px solid lightgray",
                height: "10%",
                width: "100%",
                color: "white",
                boxSizing: "border-box"
                // fontWeight: "bold"
            }}>
                Note Title Here
            </div>
            
        </div>
        
        
    );
};


export default Notecard