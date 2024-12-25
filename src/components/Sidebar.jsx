import React from "react";
import { 
  AiOutlineHome, AiOutlineHistory, AiOutlineFire, AiOutlineClockCircle, 
  AiOutlineSetting, AiOutlineQuestionCircle, AiOutlineLogout, AiOutlineSearch, 
  AiOutlineThunderbolt, AiOutlineCamera, AiOutlineUser, AiOutlineShareAlt, 
  AiOutlineAppstoreAdd, AiOutlineComment
} from "react-icons/ai";
import { FaRegPlayCircle, FaRegFolder, FaMusic, FaThumbsUp } from "react-icons/fa";
import { MdSubscriptions, MdPlaylistPlay, MdNotifications, MdLiveTv, MdCameraAlt } from "react-icons/md";
import { RiVideoLine, RiBookmarkLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const sidebarItem = [
  {
    icons: <AiOutlineHome size="24px" />,
    title: "Home",
  },
  {
    icons: <FaRegPlayCircle size="24px" />,
    title: "Shorts",
  },
  {
    icons: <MdSubscriptions size="24px" />,
    title: "Subscription",
  },
  {
    icons: <RiVideoLine size="24px" />,
    title: "Your Videos",
  },
  {
    icons: <FaRegFolder size="24px" />,
    title: "Library",
  },
  {
    icons: <AiOutlineHistory size="24px" />,
    title: "History",
  },
  {
    icons: <AiOutlineFire size="24px" />,
    title: "Trending",
  },
  {
    icons: <FaMusic size="24px" />,
    title: "Music",
  },
  {
    icons: <MdPlaylistPlay size="24px" />,
    title: "Playlists",
  },
  {
    icons: <AiOutlineClockCircle size="24px" />,
    title: "Watch Later",
  },
  {
    icons: <FaThumbsUp size="24px" />,
    title: "Liked Videos",
  },
  {
    icons: <AiOutlineSetting size="24px" />,
    title: "Settings",
  },
  {
    icons: <AiOutlineQuestionCircle size="24px" />,
    title: "Help",
  },
  {
    icons: <AiOutlineLogout size="24px" />,
    title: "Sign Out",
  },
  {
    icons: <MdNotifications size="24px" />,
    title: "Notifications",
  },
  {
    icons: <MdLiveTv size="24px" />,
    title: "Live",
  },
  {
    icons: <AiOutlineSearch size="24px" />,
    title: "Search",
  },
  {
    icons: <AiOutlineThunderbolt size="24px" />,
    title: "Trending Now",
  },
  {
    icons: <RiBookmarkLine size="24px" />,
    title: "Bookmarks",
  },
  {
    icons: <MdCameraAlt size="24px" />,
    title: "Camera",
  },
  {
    icons: <AiOutlineCamera size="24px" />,
    title: "Live Stream",
  },
  {
    icons: <AiOutlineUser size="24px" />,
    title: "Channel",
  },
  {
    icons: <AiOutlineShareAlt size="24px" />,
    title: "Share",
  },
  {
    icons: <AiOutlineAppstoreAdd size="24px" />,
    title: "Help Center",
  },
  {
    icons: <AiOutlineComment size="24px" />,
    title: "Feedback",
  },
];

const Sidebar = () => {
  const open = useSelector((store) => store.app.open);

  return (
    <div
      className={`relative left-0 ${open ? "w-[20%]" : "w-[6%]"} p-5 h-[calc(100vh-4.625rem)] bg-white overflow-y-scroll overflow-x-hidden`}
    >
      {sidebarItem.map((item, index) => {
        return (
          <div key={index} className="flex my-3 ml-2">
            {item.icons}
            <p className={`ml-5 ${open ? "" : "hidden"}`}>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
