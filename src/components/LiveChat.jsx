import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage';
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import { setMessage } from "../store/chatSlice";
import { generateRandomName, generateRandomMessage } from "../store/helper";

const LiveChat = () => {

    const message = useSelector((store) => store.chat.message);
    const dispatch = useDispatch();
    useEffect(()=>{
       const timer = setInterval(()=>{
            dispatch(setMessage({name:generateRandomName(), message:generateRandomMessage(16)}));
        },1000)

        return(()=>{
            clearInterval(timer)
        })
        
    },[])

    return (
        <div className='px-4 py-1'>
            <div>
                {
                    message.map((item,idx) => {
                        return (
                            <ChatMessage key={idx} item={item}/>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default LiveChat