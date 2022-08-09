// packages
import React from "react";

// styling
import "./ChatMessage.css";

// icons
import { DeliveredIcon, SeenIcon } from "../../../assets/StatusIcons";

function ChatMessage({ chatData, lastMessageOwner }) {
  return (
    <div
      className="ChatMessage"
      style={{
        justifyContent: chatData.sentBy === "Me" ? "flex-end" : "flex-start",
        // paddingBottom: chatData.sentBy === lastMessageOwner ? '0.15rem' : '0.75rem'
      }}
    >
      <div
        className="ChatMessage__card"
        style={{
          backgroundColor: chatData.sentBy === "Me" ? "#d9fdd3" : "white",
        }}
      >
        <div className="ChatMessage__content">{chatData.content}</div>
        <div className="ChatMessage__metaData">
          <div className="ChatMessage__time">{chatData.time}</div>
          {chatData.status != null && <div className="ChatMessage__status">
            {chatData.status === "Seen" ? (
              <SeenIcon />
            ) : chatData.status === "Delivered" ? (
              <DeliveredIcon />
            ) : null}
          </div>}
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
