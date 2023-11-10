import React,{useRef,useEffect} from "react";


function TextInput(props){
    let inputReference = useRef()
    useEffect(() => {
        if(props.running===true){
            inputReference.current.focus()
        }
    }, [props.running]);
    return (
          <input type="text" className="border-0 border-bottom" onChange={props.onChange} disabled={!props.running} value={props.value} style={{outline: 'none'}} ref={inputReference} />
    )
};

export default TextInput;