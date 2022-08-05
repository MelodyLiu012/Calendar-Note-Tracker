import { useState } from 'react'

const EditorBtnWrapper = ({ children }) => {

  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <div style={ btnHovered ? {...formatBtnStyle, cursor: "pointer", border: "2px solid gray"} : formatBtnStyle }
    onMouseEnter={() => setBtnHovered(true)}
    onMouseLeave={() => setBtnHovered(false)}>
      {children}
    </div>
  )
}

var formatBtnStyle = { // style without the cursor hover
  border: "2px solid lightgray",
  borderRadius: "5px",
  color: "lightslategray",
  padding: "8px",
  width: "17px",
  height: "17px",
  backgroundColor: "rgba(255, 255, 255, 1)",
  margin: "0% 0.5% 0% 0.5%",
  cursor: "default",
  display: "block",
}
  

export default EditorBtnWrapper