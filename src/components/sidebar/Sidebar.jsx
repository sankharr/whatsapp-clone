// packages
import React from "react";

// icons
import { FaRegUserCircle } from "react-icons/fa";
import { TbRefreshDot } from "react-icons/tb";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { IoFilterOutline } from "react-icons/io5";

// styling
import "./Sidebar.css";
import { AvatarIcon } from "../../assets/AvatarIcon";
import Divider from "../Divider";
import ChatTile from "./chatTile/ChatTile";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="Sidebar__header">
        <AvatarIcon width='2.5rem'/>
        <div className="Sidebar__header--rightCorner">
          <TbRefreshDot className="Sidebar__header--rightCornerIcon" />
          <MdMessage className="Sidebar__header--rightCornerIcon" />
          <BiDotsVerticalRounded className="Sidebar__header--rightCornerIcon" />
        </div>
      </div>
      <div className="Sidebar__search">
        <div className="Sidebar__searchArea">
          <AiOutlineSearch />
          <input
            type="text"
            className="Sidebar__inputField"
            name="search"
            placeholder="Search or start a new chat"
          />
        </div>
        <IoFilterOutline className="Sidebar__search--filterIcon" />
        
      </div>
      <Divider size='1px' type='solid' color='#e9edef'/>
      <div className="Sidebar__chatList">
        <ChatTile name='Alan' lastMessage='See you' lastMessageStatus='Seen' lastMessageDate='21/07/2022' />
        <ChatTile name='Alan' lastMessage='See you' lastMessageStatus='Seen' lastMessageDate='21/07/2022' />
        <ChatTile name='Alan' lastMessage='See you' lastMessageStatus='Seen' lastMessageDate='21/07/2022' />
      </div>
    </div>
  );
}

export default Sidebar;
