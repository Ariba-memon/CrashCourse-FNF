import React from 'react'
import Logo from '../Assets/Logo.png'
const Chatbot = () => {
  return (
    <div>
        <style>
{`
    df-messenger{
        --df-messenger-bot-message: #fffff;
        --df-messenger-button-titlebar-color: #151515;
        --df-messenger-chat-background-color: #fffff;
        --df-messenger-user-message: #524C42

    }
`}

        </style>
      <df-messenger
  intent="WELCOME"
  chat-title="blogweb"
  chat-icon={Logo}
  agent-id="dfa57d33-74a0-439d-8506-b33660f8fc9b"
  language-code="en"
  df-messenger-font-color = "red"
></df-messenger>
    </div>
  )
}

export default Chatbot
