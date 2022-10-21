import React from "react";

function Btn(props){
 return <button onClick={props.func} key={props.keys} className={props.classes}>{props.html}</button>
}

export default Btn