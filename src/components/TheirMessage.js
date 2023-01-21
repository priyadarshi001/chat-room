import React from 'react'

export default function TheirMessage({lastMessage, message}) {
 const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{
            backgroundImage:
              message.sender && `url(${message?.sender?.avatar})`,
          }} // if message's sender's avatar exist then use it for backgroundImage if the first message is by the user
        />
      )}
      {/** if first message is not by user then */}
      {message.attachments && message.attachments.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ marginLeft: isFirstMessageByUser ? "4px" : "48px" }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            backgroundColor: "#ece5dd",
            marginLeft: isFirstMessageByUser ? "4px" : "48px",
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}
