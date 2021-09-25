
import Chatbot from 'react-chatbot-kit'
import React, { useState} from 'react'

import ActionProvider from './ActionProvider'
import MessageParser from './MessageParser'
import config from './config'


const ChatBot = () => {
  const [help, setHelp] = useState(false)

  const btnhandler = () =>{
    setHelp(!help)
  }

    return (
      <>
      <button className="btn btn-outline-dark" onClick={btnhandler}>Click me to chat with Bot</button>
      {(help)?
      <div>
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser}/>
      </div> : null

        }
      </>
    )
}

export default ChatBot
