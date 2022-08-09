import {useEffect, useState} from 'react'
import {
  FaBold, 
  FaItalic, 
  FaList, 
  FaLink, 
  FaUnderline, 
  FaHeading, 
  FaHighlighter, 
  FaStrikethrough,
  FaSuperscript, 
  FaSubscript,
  FaListOl,
  FaUnlink,
  FaSave,
  FaCheck,
  FaCog
} 
from 'react-icons/fa'
import { VscLoading } from "react-icons/vsc"
import VerticalLine from './VerticalLine';
import EditorBtnWrapper from "./EditorBtnWrapper"

const NoteEditor = ({ note, noteClicked, setEditorState, editorState }) => {

  useEffect(() => {

  }, [])

  return (
    <div style={ editorState.isNoteSelected ? {...noteEditorStyle, display: "inline"} : noteEditorStyle }>
      
      <div style={{  // TODO: wont be rerendered, move to css file
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "rgba(255, 255, 255, 0.7)",
          backgroundColor: "rgba(169, 169, 170, 0.9)",
          padding: "3px",
          fontSize: "1.05em",
          boxSizing: "border-box",
          height: "8%",
          border: "2px solid lightgray",
          // marginBottom: "1.5%",
          borderTopRightRadius: "10px",
          borderTopLeftRadius: "10px"
        }}>
          <EditorBtnWrapper><FaBold /></EditorBtnWrapper>
          <EditorBtnWrapper><FaItalic /></EditorBtnWrapper>
          <EditorBtnWrapper><FaUnderline /></EditorBtnWrapper>
          <EditorBtnWrapper><FaStrikethrough /></EditorBtnWrapper>
          <EditorBtnWrapper><FaSubscript /></EditorBtnWrapper>
          <EditorBtnWrapper><FaSuperscript /></EditorBtnWrapper>
          <EditorBtnWrapper><FaHeading /></EditorBtnWrapper>
          <VerticalLine />
          <EditorBtnWrapper><FaHighlighter /></EditorBtnWrapper>
          <VerticalLine />
          <EditorBtnWrapper><FaList /></EditorBtnWrapper>
          <EditorBtnWrapper><FaListOl /></EditorBtnWrapper>
          <VerticalLine />
          <EditorBtnWrapper><FaLink /></EditorBtnWrapper>

          {/* only show when highlighting something with link*/}
          {/* <EditorBtnWrapper><FaUnlink /></EditorBtnWrapper> */}

          <VerticalLine />
          <EditorBtnWrapper><FaCog /></EditorBtnWrapper>
        </div>
      
      <div 
        style={editorBoxStyle}
        className="dltFocusStyle"
        contentEditable={true}
      >
        {note.text}
      </div>

      {/*autosaved time indicated*/}
      {/*
        saving: loading indicator
        saved: check indicator
        unsaved changes: no indicator, only save button
      */}

      <div style={{
        textAlign: "right",
        margin: "1%"
      }}>
        <FaSave style={{
          width: "17px",
          height: "17px",
          color: "lightslategray",
          margin: "4px",
        }}/>

        <FaCheck style={{
          width: "17px",
          height: "17px",
          color: "lightslategray",
          margin: "4px",
        }}/>

        <VscLoading style={{
          width: "17px",
          height: "17px",
          color: "lightslategray",
          margin: "4px",
        }}/>
      </div>
      

    </div>
  )
}


const noteEditorStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.6)",
  // background: "linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.5))",
  width: "59vw", 
  height: "100vh",
  // position: "absolute",
  display: "none",
  right: "0%",
  justifyContent: "space-around",
  padding: "2%",
  boxSizing: "border-box",
  borderLeft: "2px white dashed",
  gap: "3%",
}

const editorBoxStyle = {
  border: "2px solid lightgray",
  borderBottomLeftRadius: "10px",
  borderBottomRightRadius: "10px",
  overflow: "hidden",
  backgroundColor: "rgba(255, 255, 255, 0.6)",
  height: "80%",
  padding: "2%",
  lineHeight: "1.3em",
  overflow: "auto",
  margin: "-2px 0 0 0"
}


export default NoteEditor