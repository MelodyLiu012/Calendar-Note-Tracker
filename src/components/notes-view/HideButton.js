import { hover } from '@testing-library/user-event/dist/hover';
import {useState} from 'react'
import {RiArrowRightSFill} from "react-icons/ri"

const HideButton = ({ 
    viewState, 
    setViewState,
}) => {
    const [hovering, setHovering] = useState(false);

    return (
        <div 
            style={{ 
                height: "100%",
                width: "1.5vw",
                background: hovering ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.6)",
                
                boxSizing: "border-box",
                borderLeft: "2px solid lightgray",
                color: "gray",
                cursor: hovering ? "pointer" : "default",
            }}
            onMouseEnter={() => {setHovering(true)}}
            onMouseLeave={() => {setHovering(false)}}
            onClick={() => {
                setViewState({
                    ...viewState,
                    visible: !viewState.visible
                });
            }}
        >
            <div style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <RiArrowRightSFill style={{minWidth: "30px", minHeight: "30px"}}/>
            </div>
            
        </div>
    )
}

export default HideButton