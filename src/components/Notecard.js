
const Notecard = ({ text }) => {
  return (
    <div style={{
        lineHeight: "1.3em",
        overflow: "auto",
        height: "100%",
        padding: "2% 4% 2% 4%",
        boxSizing: "border-box"
    }}>
        {text}
    </div>
  )
}

export default Notecard