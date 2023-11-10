import React from "react";
import ReactDOM  from "react-dom";
import './Modal.css';
import Context from "./Context";
import { useContext } from "react";

function Modal(props){
    let ctx = useContext(Context);
       return ReactDOM.createPortal(

        <React.Fragment> 
         <div className='alert'>
            <h2>Here is your result</h2>
            <p>
                Correct Characters: {ctx.correct}
            </p>
            <p>
                Incorrect Characters: {ctx.incorrect}
            </p>
            <p>
                words per minute: {(ctx.correct/5)/0.25}
            </p>
            <p>
                Accuracy: {ctx.correct/(ctx.correct+ctx.incorrect)*100}%
            </p>
            <button className= "modal-btn" onClick={props.onRestartClicked}>Restart</button>
        </div>
        <div className='overlay'></div>
        </React.Fragment>,
        document.getElementById('modal-root'))
};

export default Modal;