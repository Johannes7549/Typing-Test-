import React from "react";

function Button(props){
       return (
        <>
         <button onClick={props.onStartClicked}
         style={props.style}
         
         >{props.children}</button>
         </>)
};

export default Button;