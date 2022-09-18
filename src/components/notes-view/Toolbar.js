import { useState } from "react";
import {MdOutlineNoteAdd} from "react-icons/md"
import {CgReorder} from "react-icons/cg"

import { db } from "../../firebase";
import { addDoc, collection } from 'firebase/firestore';

const Toolbar = ( {setEditorState} ) => {

    const addNote = async (e) => {
        setEditorState({ 
            visible: true,
            selectedIndex: 100,
        });
        
        try {
            console.log("Document add attempted.");
            const noteRef = await addDoc(collection(db, "user1", ), {
                title: "New Note",
                content: "",
            });
            console.log("Document successfully written with ID: ", noteRef.id);
        } 
        catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <div className="noteToolbar">
            <div
                className="toolBtn"
                onClick={addNote}
            >
                <MdOutlineNoteAdd style={{width: "25px", height: "25px"}}/>
            </div>

            <div
                className="toolBtn"
                onClick={addNote}
            >
                <CgReorder style={{width: "25px", height: "25px"}}/>
            </div>
            
        </div>
    )
}

export default Toolbar;