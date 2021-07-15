import axios from 'axios'
import React, { useState, useEffect } from 'react'

const MadLib = (props) => {
    const {passedMessage, setPassedMessage} = props
    console.log(passedMessage)
        const [word, setWord] = useState("")
        const [type, setType] = useState(null)
        const [randomWord, setRandomWord] = useState("")

        const splitMessage = passedMessage.split(" ")
        const rando = Math.floor((Math.random() * splitMessage.length) + 0 )

        useEffect( () => {
            console.log("starting axios or whatever")
            axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${splitMessage[rando]}`)
                .then(response => {
                    setType(response.data[0].meanings[0].partOfSpeech)
                })

            }, [])

        const swap = (e) => {
            e.preventDefault()
            // setRandomWord(splitMessage[rando])
            // splitMessage[rando] = randomWord
            // Array.splice(position,num);
            console.log("this is the split message @ line 28", splitMessage)
            console.log("this is the rando const at line 29", rando)
            console.log("this is the randomWord at line 30", randomWord)
            splitMessage.splice(rando, 1, word)
                console.log("splitMessage[rando]", splitMessage)
            setPassedMessage(splitMessage.join(" "))
            }


        const formHandler = (e) => {
            setWord([e.target.name] = e.target.value)
        }
        
    return (
        <div>
            <h1>this is where the user will do the random word swap</h1>
            <p>{passedMessage}</p>
            <br/>
            <form onSubmit={swap}>
                <label htmlFor= 'noun' >swap a {type}</label>
                <input type='text' name='noun' onChange={formHandler} />
                <button>Swap</button>
            </form>
            <hr/>
            {JSON.stringify(word)}
            <br/>
            {JSON.stringify(passedMessage)}
            <p>this is the random word after click {JSON.stringify(randomWord)}</p>
        </div>
    )
}

export default MadLib
