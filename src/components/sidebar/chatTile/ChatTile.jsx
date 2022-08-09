// packages
import React, { useState } from "react";
import { AvatarLightIcon } from "../../../assets/AvatarLightIcon";

// icons
import { IoVolumeMuteSharp } from "react-icons/io5";
import { MdOutlineDone } from "react-icons/md";
import { BsFillPinAngleFill } from 'react-icons/bs';

// styling
import "./ChatTile.css";
import Divider from "../../Divider";

const DeliveredIcon = () => {
  return (
    <>
      <MdOutlineDone style={{}} />
      <MdOutlineDone style={{ marginLeft: "-0.65rem", marginTop: '0.025rem' }} />
    </>
  );
};

const SeenIcon = () => {
  return (
    <>
      <MdOutlineDone style={{ color: "#53bdeb" }} />
      <MdOutlineDone style={{ color: "#53bdeb", marginLeft: "-0.65rem", marginTop: '0.025rem' }} />
    </>
  );
};

function ChatTile({
  name,
  lastMessage,
  lastMessageStatus,
  lastMessageDate,
  chatPinned,
  chatMuted,
}) {
  const [messageStatusDisplay, setMessageStatusDisplay] = useState();

  return (
    <>
      <div className="ChatTile">
        <div className="ChatTile__avatar">
          <AvatarLightIcon />
        </div>
        <div className="ChatTile__center">
          <div className="ChatTile__name">{name}</div>
          <div className="ChatTile__lastMessage">
            <span className="ChatTile__lastMessageStatus">
              {lastMessageStatus === "Sent" ? (
                <MdOutlineDone />
              ) : lastMessageStatus === "Delivered" ? (
                <DeliveredIcon />
              ) : lastMessageStatus === "Seen" ? (
                <SeenIcon />
              ) : null}
            </span>
            {lastMessage}
          </div>
        </div>
        <div className="ChatTile__end">
          <div className="ChatTile__date">{lastMessageDate}</div>
          <div className="ChatTile__end--icons">
            {chatMuted && <IoVolumeMuteSharp />}
            {chatPinned && <BsFillPinAngleFill />}
            
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
