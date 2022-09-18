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
import {AiFillSetting} from "react-icons/ai"

import VerticalLine from '../custom/VerticalLine';
import EditorBtnWrapper from "./EditorBtnWrapper"
import HideButton from './HideButton';

const NoteEditor = ({ note, setEditorState, editorState }) => {

  useEffect(() => {

  }, [])

  /*
   * Element space maths(height):
   * padding: 2% x2
   * title: 4%
   * toolbar marginTop: 1.5%
   * toolbar: 8%
   * editor box: 75%
   * editor box padding: 2% x2
   * save tool div: 7.5%
   */

  return (
    <div style={{
      maxWidth: "65%", 
      height: "100vh",
      display: editorState.visible ? "flex" : "none",
    }}>

      <div>
        <HideButton viewState={editorState} setViewState={setEditorState}/>
      </div>

      <div style={noteEditorStyle}>

        <div style={{
          height: "4%",
          display: "flex",
          justifyContent: "space-between"
        }}>
          <div 
            contentEditable={true}
            placeholder="Set a Title..."
            className="title" // style in css file
          >
            {note?.title}
          </div>

          <div className="toolBtn">
            <AiFillSetting style={{width: "25px", height: "25px"}}/>
          </div>
        </div>

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
            marginTop: "1.5%",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
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
          </div>
        

        <div 
          style={editorBoxStyle}
          className="dltFocusStyle"
          contentEditable={true}
        >
          {note?.content}
        </div>


        {/*autosaved time indicated*/}
        {/*
          saving: loading indicator
          saved: check indicator
          unsaved changes: no indicator, only save button
        */}
        <div style={{
          textAlign: "right",
          // padding: "1%",
          height: "3.5%",
          padding: "1%"
        }}>
          <FaSave style={saveIndicatorStyle}/>

          <FaCheck style={saveIndicatorStyle}/>

          <VscLoading style={saveIndicatorStyle}/>
        </div>
        

      </div>
    </div>
  )
}

const saveIndicatorStyle = {
  width: "17px",
  height: "17px",
  color: "lightslategray",
  margin: "4px",
}


const noteEditorStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.6)",
  // background: "linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.5))",
  // position: "absolute",
  right: "0%",
  justifyContent: "space-around",
  padding: "2%",
  boxSizing: "border-box",
  gap: "3%",
}

const editorBoxStyle = {
  border: "2px solid lightgray",
  borderBottomLeftRadius: "10px",
  borderBottomRightRadius: "10px",
  overflow: "hidden",
  backgroundColor: "rgba(255, 255, 255, 0.6)",
  height: "72%",
  padding: "2%",
  lineHeight: "1.3em",
  overflow: "auto",
  margin: "-2px 0 0 0"
}


export default NoteEditor