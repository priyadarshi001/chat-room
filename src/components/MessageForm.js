import {useState} from 'react'
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

export default function MessageForm(props) {
 const[value, setValue] = useState(''); // initial value of value is empty
 const {chatId, creds} = props; // destructuring
 
 const handleChange = (event) => {
  setValue(event.target.value); // or use {e}--> e.target.value
  isTyping(props, chatId);
 }

 const handleSubmit = (event) => {
   event.preventDefault(); // do not do browser refresh when submit
   const text = value.trim();
   if (text.length > 0) sendMessage(creds, chatId, { text });
   setValue(''); // once message is sent, make the form empty
 }

 const handleUpload = (event) => {
  sendMessage(creds, chatId, { files: event.target.files, text: ''});
 }
  
 return (
    <form className='message-form' onSubmit={handleSubmit}>
     {/** input for a form */}
     <input 
      className='message-input'
      placeholder = "send a message..."
      value = {value}
      onChange = {handleChange}
      onSubmit = {handleSubmit}
     />
     <label htmlFor='upload-button'>
      <span className='image-button'>
       <PictureOutlined className='picture-icon' />
      </span>
     </label>
     <input type = "file" multiple = {false} id = "upload-button" style={{display: 'none'}} onChange = {handleUpload.bind(this)} />
     <button type = "submit" className='send-button'>
      <SendOutlined className = "send-icon" />
     </button>
    </form>
  )
}
