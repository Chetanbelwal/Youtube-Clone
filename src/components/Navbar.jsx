import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { toggleSidebar } from "../store/appSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="flex top-0 justify-center items-center w-[100%] z-10 bg-white fixed">
      <div className="flex w-[96%] py-3 justify-between items-center">
        <div className="flex items-center">
          <GiHamburgerMenu
            onClick={toggleHandler}
            size="24px"
            className="cursor-pointer"
          />
          <Link to={`/`}><img
            className="px-4"
            width={"115px"}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png"
            alt="yt_logo"
          /></Link>
          
        </div>
        <div className="flex w-[40%] items-center">
          <div className="flex w-[100%] ">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 px-4 border border-gray-400 rounded-l-full outline-none"
            />
            <button className="py-2 border border-gray-400 rounded-r-full px-4">
              <CiSearch size="24px" />
            </button>
          </div>
        </div>
        <div className="flex w-[10%] justify-between items-center">
          <IoIosNotificationsOutline size={"24px"} className="cursor-pointer" />
          <CiVideoOn size={"24px"} className="cursor-pointer" />
          <Avatar
            src="https://media.licdn.com/dms/image/v2/D5603AQH4kfjNTfPUlQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1708356771714?e=2147483647&v=beta&t=94LpPLuhbVvqG4-b-ZhJolFKYA0gSf0Y0XWD-_zswo0"
            size={35}
            round={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
