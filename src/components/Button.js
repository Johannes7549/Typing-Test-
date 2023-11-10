import React from "react";

function Button(props){
       return (
         <button onClick={props.onStartClicked}>{props.children}</button>)
};

export default Button;