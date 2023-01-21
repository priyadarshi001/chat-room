import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

export default function ChatFeed(props) {
 const {chats, activeChat, userName, messages} = props;

 const chat = chats && chats[activeChat];

 const renderReadReceipts = (message, isMyMessage) =>
  // map over people who read message
  chat.people.map((person, index) =>
   person.last_read === message.id && (
    <div key = {`read_${index}`} className = 'read-receipt' style = {{float: isMyMessage ? 'right' : 'left', backgroundImage: person.person.avatar && `url(${person.person.avatar})`}} />
   )
  );

 const renderMessages = () => {
  const keys = Object.keys(messages); // keys for every messages
  return keys.map((key, index)=> {
   const message = messages[key]; // loop over each message using key
   const lastMessageKey = index === 0 ? null : keys[index - 1]; // if there are messages find last message
   const isMyMessage = userName === message.sender.username;

   return (
    <div key = {`msg_${index}`} style = {{width: "100%"}}>
     <div className="message-block">
      {
       isMyMessage ? <MyMessage message = {message}/>
       : <TheirMessage message = {message} lastMessage = {messages[lastMessageKey]} />
      }
     </div>
     <div className="read-receipts" style = {{marginRight : isMyMessage ? '18px' : '0px', marginLeft : isMyMessage ? '0px' : '68px'}}>
      {renderReadReceipts(message, isMyMessage)}
     </div>
    </div>
   );
  });
 };


 if(!chat) return <div />; // if not chat
   return (
    <div className="chat-feed">
      <div className="chat-title-container">
       <div className="chat-title">{chat?.title}</div>
       <div className="chat-subtitle">
        {chat.people.map((person) => `${person.person.username}`)}
       </div>
      </div>
      {renderMessages()}
      <div style={{height: '100px'}}></div> {/** to leave some space between messages */}
      <div className="message-form-container">
       <MessageForm {...props} chatId = {activeChat} />
      </div>
    </div>
  );
}
