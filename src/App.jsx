import { useState } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Button from "./components/Button"
import "./styles/global.css"
import "./styles/container.css"
import "./styles/header.css"

export default function App (){
    return (
        <div>
            <Container/>
            <Header/>
            <img src="" alt="" />
            <p>Hidden in the middle of text</p>
            <Buttons />
            <Button />
        </div>

    )

    

    // const [currentScore, setCurrentScore]=useState("")
    // const [prevScore, setPrevScore]=useState("1")
    // const [changeScore, setChangeScore]=useState("")
    // // const [incScore, setIncScore]=useState("")
    // // const [decScore, setDecScore]=useState("")

    // function changeScore(val){
    //     setChangeScore(val)
    //     setPrevScore(currentScore)
    //     setCurrentScore()
    // };
}