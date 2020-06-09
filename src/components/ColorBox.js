import React, {useState} from 'react'
import {useSelector} from 'react-redux'


export default function ColorBox({ bgColor }) {
    let [bgBoxColor,setBoxBgColor]=useState(null)
    let textColor = useSelector(state=>state.textColor)
    if (bgBoxColor === null) {
        return (
            <div>
            <div style={
                { width: "150px", height: "100px", backgroundColor: `${bgColor}`,margin: "10px", border: "1px solid black" }
            } >
                 <p style={{color:`${textColor}`}}>colorful box</p>
            <input type="text" onChange={(e)=>setBoxBgColor(e.target.value)}></input>
            </div>
        </div>
        )
    } 
    return (
        <div>
            <div style={{ width: "150px", height: "100px", backgroundColor: `${bgBoxColor}`, margin: "10px", border: "1px solid black" }} >
                <p style={{color:`${textColor}`}}>colorful box</p>
            <input type="text" onChange={(e)=>setBoxBgColor(e.target.value)}></input>
            </div>
        </div>
    )
}
