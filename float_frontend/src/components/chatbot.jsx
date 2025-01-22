import React, { useState, useRef, useEffect }  from 'react';
import '../App.css';
import { Icon } from '@iconify/react';

export default function Login() {  
  const sendChatBtn = document.querySelector(".chat-input span");
  const chatbox = document.querySelector(".chatbox");  
  const [userMessage, setUserMessage] = useState("");
  const API_KEY="hreiugfbwovjw1232idje";
    const handleInputChange = (e) => {
      setUserMessage(e.target.value);
    };
    const handleSendMessage = () => {
      const trimmedMessage = userMessage.trim();
      if (trimmedMessage) {
        chatbox.appendChild(createChatLi(userMessage, "outgoing"));
          setTimeout(()=>{
            chatbox.appendChild(createChatLi("Generating Response...","incoming"));
          },600);
        console.log("Message:", trimmedMessage);
        setUserMessage(""); 
      }};
      const handleSpeakerClick = () => {
        const trimmedMessage = "Voice Assistant";
        if (trimmedMessage) {
          chatbox.appendChild(createChatLi(userMessage, "outgoing"));
            setTimeout(()=>{
              chatbox.appendChild(createChatLi(trimmedMessage,"incoming"));
            },600);
          console.log("Message:", trimmedMessage);
          setUserMessage(""); 
        }};
  
  // const generateResponse = () =>{
  //   const API_URL="https://www.choicehotels.com/choice-privileges/earn-points/mastercard-credit-card?FPID=0124CAIXP10000&utm_source=WF&app_source=WELLS_FARGO_COM&locale=en_US&product_code=CC&subproduct_code=CP&sub_channel=WEB&vendor_code=WF&cx_nm=CXNAME_CSMPD_MC&referrerurl=creditcardswellsfargocom&lang=en&linkloc=fnmc";
  //   const requestOptions={
  //     method:"POST",
  //     headers:{
  //       "Content-Type":"application/json",
  //       "Authorization":`Bearee ${API_KEY}`
  //     },
  //     body: JOSN.stringify({
  //       model:"gpt-3.5-turbo",
  //       messages:[{role:"user",content:userMessage}]
  //     })
  //   }
  //   fetch(API_URL,requestOptions).then(res=>res.json()).then(data=>{
  //     console.log(data);
  //   }).catch((error)=>{

  //   })
  // }
   const [isSpeakerActive, setIsSpeakerActive] = useState(true);
  
    const handleButtonClick = () => {
      setIsSpeakerActive((prevState) => !prevState);
      if (isSpeakerActive) {
        console.log("Speaker activated!");
      } else {
        console.log("Stop button clicked!");
      }
    };
  const createChatLi = (message, className) => {

  const chatLi = document.createElement("li");

  chatLi.classList.add("chat", className);

  let chatContent = className === "outgoing" ? `<p>${message}</p>`:` <span>AI</span> <p>${message}</p>`;
          chatLi.innerHTML=chatContent;
          return chatLi

  }
	return (   
		<>
			
      <div class="chatbot">
        <header><h2>Chatbot</h2></header>
        <ul class="chatbox">
            <li class="chat incoming">
              <span>AI</span>
                <p>Hi! How can I help You?</p>
            </li>
          </ul>    
          
    		 
		      <div class="chat-input">
          
            <textarea value={userMessage} 
               onChange={handleInputChange} placeholder='Enter the text'></textarea>
               {userMessage.trim() ? (
                  <span onClick={handleSendMessage} >
                    <Icon icon="mdi:send" color="#724ae8" height=" 50px" line-height="0px" border="None" width="35"/>
                  </span>
              ) : (
                  <span onClick={handleButtonClick} >
                    {isSpeakerActive ? (                  
                    <Icon icon="mdi:microphone" color="#724ae8" width="35" line-height="0px" border="None" />
                    ) : (
                      <Icon icon="mdi:stop-circle" color="#f44336" width="35" line-height="0px" border="None" />
                    )}
                  </span>              
            )}                    
            
            </div>	
        </div>
   </>
	);
}

