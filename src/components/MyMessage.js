import React from "react";

export default function MyMessage({ message }) {
  // check if last my msg is text or img
  if (message.attachments && message.attachments.length > 0) {
    // img
    return(
     <img
       src={message.attachments[0].file}
       alt="message-attachment"
       className="message-image"
       style={{ float: "right" }} // our message must always appear to the right
     />
    )
  }
  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#25d366",
      }}
    >
      {message.text}
    </div>
  );
}
