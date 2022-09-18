import { React, useState} from "react";

const Notecard = ({ dayNote, setEditorState }) => {
    const [hovering, setHovering] = useState(false);
    const [clicked, setClicked] = useState(false); // add style to clicked state?

    return (
        <div 
            onClick={() => {
                setEditorState({ 
                    visible: true,
                    selectedIndex: dayNote.index
                });
            }}
            onPointerEnter={() => {
                setHovering(true);
            }}
            onPointerLeave={() => {
                setHovering(false);
            }}
            style={{
                border: hovering ? "2px solid gray": "2px solid lightgray",
                borderRadius: "10px",
                width: "100%",
                height: "35%",
                maxHeight: "35vh",
                marginTop: "4%",
                overflow: "hidden",
                backgroundColor: "rgba(255, 255, 255, 0.6)",
            }}
        >

            <div 
                placeholder="Empty..."
                className="notecard" // style in css file
                style={{
                    lineHeight: "1.3em",
                    overflow: "auto",
                    minWidth: "100%",
                    height: "90%",
                    padding: "2% 4% 2% 4%",
                    boxSizing: "border-box",
                    cursor: hovering ? "pointer": "default",
                    scrollbarWidth: "none"
                }}
            >
                {dayNote.content}
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
            
            {/*it doesnt work??????????????*/}
            {/* <div style={{ 
                width: "100%", 
                height: "9px",
                backgroundColor: "lightgray",
                boxSizing: "border-box",
                display: dayNote.index == 0 ? "block" : "none"
            }}>aaaaaaaaaaaaaaaaaaaaaaaaa</div> */}
        </div>
        
        
    );
};


export default Notecard