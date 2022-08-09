// packages
import React, { useEffect } from "react";

// styling
import "./chatWindow.css";
import chatBackground from "../../assets/chatBackground.jpeg";

// stateManagement
import { useStateValue } from "../../context/StateProvider";

// icons
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AvatarLightIcon } from "../../assets/AvatarLightIcon";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { RiAttachment2 } from "react-icons/ri";
import { MdKeyboardVoice } from "react-icons/md";
import ChatMessage from "./chatMessage/ChatMessage";

function ChatWindow() {
  const [{ userData }, dispatch] = useStateValue();

  useEffect(() => {
    console.log("userData - ", userData);
  });
  return (
    <div className="ChatWindow">
      <div className="ChatWindow__header">
        <div className="ChatWindow__avatar">
          <AvatarLightIcon />
        </div>
        <div className="ChatWindow__headerMiddleSection">
          <div className="ChatWindow__name">{userData?.name}</div>
          <div className="ChatWindow__status">Last seen 10.23 AM</div>
        </div>
        <div className="ChatWindow__header--rightCorner">
          <AiOutlineSearch className="ChatWindow__header--rightCornerIcon" />
          <BiDotsVerticalRounded className="ChatWindow__header--rightCornerIcon" />
        </div>
      </div>
      <div className="ChatWindow__messageDisplay">
        {userData?.messages.map((message, index) => (
          <ChatMessage
            key={message.content + index.toString()}
            chatData={message}
            lastMessageOwner={userData.messages[index-1]?.sentBy}
          />
        ))}
      </div>
      <div className="ChatWindow__messageSend">
        <MdOutlineEmojiEmotions className="ChatWindow__messageSendIcons" />
        <RiAttachment2 className="ChatWindow__messageSendIcons" />
        <div className="ChatWindow__searchArea">
          <input
            type="text"
            className="ChatWindow__inputField"
            name="search"
            placeholder="Type a message"
          />
        </div>
        <MdKeyboardVoice className="ChatWindow__messageSend--VoiceIcon" />
      </div>
    </div>
  );
}

export default ChatWindow;
