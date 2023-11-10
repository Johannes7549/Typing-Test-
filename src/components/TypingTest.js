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
    let [correctcharacters, setcorrectcharacters] = useState();
    let [incorrectcharacters, setincorrectcharacters] = useState(0);

    useEffect(() => {
        setText("This is a typing test. Try to type as many words per minute as you can. Press start to begin. Good luck!");
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
                    return prevTimer - 1;}
                    );
            }, 1000);

        }
        return () => clearInterval(intervalId);
    }, [isRunning]);
    useEffect(() => {
        // let correct = 0;
        // let incorrect = 0;
        // for (let i = 0; i < userInput.length; i++) {
        //     if (userInput[i] === text[i]) {
        //         correct++;
        //     } else {
        //         incorrect++;
        //     }
        // }

        // setcorrectcharacters(correct);
        // setincorrectcharacters(incorrect);
    }, [userInput]);
    function onRestartClicked() {
        setTimer(15);
        setUserInput("");
        setResult(false);
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
                <Button>{timer}</Button>
                <Button onStartClicked={onStartClicked}>Start</Button>
                <TextDisplay text={text} userInput={userInput} setText={setText} />
                <TextInput onChange={onChangeHandler} value={userInput} running={isRunning} />
            </div>
            {result && <Modal onRestartClicked={onRestartClicked}></Modal>}
        </React.Fragment>
        </Context.Provider>
    );
}

export default TypingTest;
