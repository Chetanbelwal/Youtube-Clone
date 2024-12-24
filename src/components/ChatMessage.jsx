import React from 'react';
import Avatar from "react-avatar";

const ChatMessage = ({ item }) => {
  return (
    <div className="flex items-start py-2">
      <div className="mr-2">
        <Avatar 
          src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" 
          size={30} 
          round={true} 
        />
      </div>
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <h1 className="font-bold text-sm text-gray-800">{item.name}</h1>
          <p className="text-sm text-gray-700 ml-2">{item.message}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
