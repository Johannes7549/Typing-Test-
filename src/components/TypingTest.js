import React, { useState, useEffect } from "react";
import Button from "./Button";
import TextDisplay from "./TextDisplay";
import TextInput from "./TextInput";
import Modal from "./Modal";
import './TypingTest.css';
import Context from "./Context";


function TypingTest() {
    let [text, setText] = useState("");
    let [userInput, setUserInput] = useState("");
    let [timer, setTimer] = useState(15);
    let [isRunning, setIsRunning] = useState(false);
    let [result ,setResult] = useState(false);

    useEffect(() => {
        setText("Click on the 'Start' button to begin the test. Type the text displayed in the box as quickly and accurately as possible. Click on 'Restart' to restart the test and see your results."); 
    }, []);

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer === 0) {
                        setIsRunning(false);
                        setResult(true);
                        return 15;
                    }
                    return prevTimer - 1;
                });
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [isRunning]);

    function onRestartClicked() {
        setTimer(15);
        setUserInput("");
        setResult(false);;
    }

    function onChangeHandler(event) {
        setUserInput(event.target.value);
    }

    function onStartClicked() {
        setIsRunning(true);
    }

    return (
        <Context.Provider value={{correct:0,incorrect:0}}>
            <React.Fragment>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center", justifyContent:"center"}}>
                    <Button >{timer}</Button>
                    <Button onStartClicked={onStartClicked} color="blue">Start</Button>
                    <TextDisplay text={text} userInput={userInput} setText={setText} />
                    <TextInput onChange={onChangeHandler} value={userInput} running={isRunning} />
                </div>
                {result && <Modal onRestartClicked={onRestartClicked}></Modal>}
            </React.Fragment>
        </Context.Provider>
    );
}

export default TypingTest;
