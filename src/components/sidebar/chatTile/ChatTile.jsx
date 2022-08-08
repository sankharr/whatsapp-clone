// packages
import React from "react";
import { AvatarIcon } from "../../../assets/AvatarIcon";

// icons
import { IoVolumeMuteSharp } from "react-icons/io5";

// styling
import "./ChatTile.css";
import Divider from "../../Divider";

function ChatTile({ name, lastMessage, lastMessageStatus, lastMessageDate }) {
  return (
    <>
      <div className="ChatTile">
        <div className="ChatTile__avatar">
          <AvatarIcon />
        </div>
        <div className="ChatTile__center">
          <div className="ChatTile__name">{name}</div>
          <div className="ChatTile__lastMessage">{lastMessage}</div>
        </div>
        <div className="ChatTile__end">
          <div className="ChatTile__date">{lastMessageDate}</div>
          <div className="ChatTile__end--icons">
            <IoVolumeMuteSharp />
          </div>
        </div>
      </div>
      <div className="ChatTile__divider">
        <Divider size="1px" type="solid" color="#e9edef" />
      </div>
    </>
  );
}

export default ChatTile;
