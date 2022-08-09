// packages
import React from "react";

// icons
import { FaRegUserCircle } from "react-icons/fa";
import { TbRefreshDot } from "react-icons/tb";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { IoFilterOutline } from "react-icons/io5";
import { AvatarIcon } from "../../assets/AvatarIcon";

// stateManagement
import { useStateValue } from "../../context/StateProvider";

// styling
import "./Sidebar.css";
import Divider from "../Divider";
import ChatTile from "./chatTile/ChatTile";
import { useNavigate } from "react-router-dom";

// data
const data = [
  {
    name: "Alan",
    lastMessage: "See you",
    lastMessageStatus: "Seen",
    lastMessageDate: "21/07/2022",
    chatPinned: true,
    chatMuted: false,
    messages: [
      {
        sentBy: "Me",
        content: "Hi!",
        time: "8.29 PM",
        status: "Seen",
      },
      {
        sentBy: "Other",
        content: "Hi!!!!",
        time: "8.29 PM",
        status: null,
      },
      {
        sentBy: "Other",
        content: "Long time no see?",
        time: "8.29 PM",
        status: null,
      },
      {
        sentBy: "Me",
        content: "Yeah right. So how are you?",
        time: "8.31 PM",
        status: "Seen",
      },
      {
        sentBy: "Other",
        content: "Im doing good. Wbu?",
        time: "8.32 PM",
        status: null,
      },
      {
        sentBy: "Me",
        content: "Same here!!",
        time: "8.33 PM",
        status: "Seen",
      },
      {
        sentBy: "Other",
        content: "Shall we meet today?",
        time: "8.34 PM",
        status: null,
      },
      {
        sentBy: "Other",
        content:
          "test test test test test test test test test test test test test test test test test test test test test test test test test ",
        time: "8.34 PM",
        status: null,
      },
    ],
  },
  {
    name: "Smith",
    lastMessage: "Gotchcha",
    lastMessageStatus: "Recieved",
    lastMessageDate: "yesterday",
    chatPinned: false,
    chatMuted: true,
  },
  {
    name: "Carrie",
    lastMessage: "Did you complete homework yesterday?",
    lastMessageStatus: "Sent",
    lastMessageDate: "8.59PM",
    chatPinned: false,
    chatMuted: false,
  },
  {
    name: "George",
    lastMessage: "Heyy How are you?",
    lastMessageStatus: "Delivered",
    lastMessageDate: "1.30PM",
    chatPinned: false,
    chatMuted: true,
  },
  {
    name: "Diederik",
    lastMessage: "You are coming today right?",
    lastMessageStatus: "Seen",
    lastMessageDate: "7.30PM",
    chatPinned: false,
    chatMuted: false,
  },
];

function Sidebar() {
  const [{ userData }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const chatClick = (chatIndex) => {
    // console.log('messages - ', data[chatIndex]);
    dispatch({
      type: "SET_USERDATA",
      data: data[chatIndex],
    });
    // navigate(`/chat/${chatIndex}`);
  };
  return (
    <div className="Sidebar">
      <div className="Sidebar__header">
        <AvatarIcon width="2.5rem" />
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
      <Divider size="1px" type="solid" color="#e9edef" />
      <div className="Sidebar__chatList">
        {data.map((chat, index) => (
          <div
            key={chat.lastMessage + index.toString()}
            onClick={() => chatClick(index)}
          >
            <ChatTile
              name={chat.name}
              lastMessage={chat.lastMessage}
              lastMessageStatus={chat.lastMessageStatus}
              lastMessageDate={chat.lastMessageDate}
              chatMuted={chat.chatMuted}
              chatPinned={chat.chatPinned}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
