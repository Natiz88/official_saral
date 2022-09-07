import React from "react";
import { useEffect, useRef, useState } from "react";
import ChatIcon from "../assets/chat.svg";
import Send from "../assets/send.svg";
import Close from "../assets/close-icon.svg";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      message: "hi",
      users: ["1", "2"],
      sender: "1",
    },
    // {
    //   message: "hello",
    //   users: ["2", "1"],
    //   sender: "2",
    // },
    {
      message: "hello",
      users: ["1", "2"],
      sender: "1",
    },
    // {
    //   message: "thikxa",
    //   users: ["2", "1"],
    //   sender: "2",
    // },
  ]);
  const [msg, setMsg] = useState();
  const [msgInfo, setMsgInfo] = useState(false);
  const [msgOpen, setMsgOpen] = useState(false);
  const [arrivalMessage, setArrivalMessage] = useState([]);
  const scrollRef = useRef();

  const handleMsgInfo = () => {};

  const handleSendMsg = async (msg) => {
    //   const data= await axios.post(addMessageRoute,{
    //      from:currentUser._id,
    //      to:currentChat._id,
    //      message:msg,
    //  });
    //  socket.current.emit("send-msg",{
    //    from:currentUser._id,
    //    to:currentChat._id,
    //    message:msg,
    //  });

    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);
    setMsg("");
  };
  // useEffect(()=>{
  //   scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  //  },[messages]);
  const executeScroll = () => scrollRef.current.scrollIntoView();
  const msgClick = () => {
    if(!msgOpen){
      setMsgOpen(!msgOpen);
    }
  }
  console.log(`new message: ${messages}`)
  return (
    // <div className="w-[155px] h-[43px] fixed right-[3%] bottom-[2%] z-50 animate-messageExpand bg-white shadow-slate-400 shadow-md border flex p-2 cursor-pointer hover:shadow-slate-400 hover:shadow-lg"
    <div
      className={
        !msgOpen
          ? "w-[155px] h-[43px] overflow-hidden fixed right-[3%] bottom-[2%] z-50 bg-white shadow-slate-400 shadow-md border flex p-2 cursor-pointer hover:shadow-slate-400 hover:shadow-lg"
          : "w-[400px] h-[500px] animate-messageExpand overflow-hidden fixed right-[3%] bottom-[2%] z-50 bg-white shadow-slate-400 shadow-md border flex p-2 cursor-pointer hover:shadow-slate-400 hover:shadow-lg"
      }
      onClick={msgClick}
    >
      <div className="w-full flex flex-col">
        <div className="h-[38px] border-b-2 flex justify-between px-2">
          <div className="flex gap-2 h-[34px] px-2">
            <img src={ChatIcon} alt="" className="w-[30px]" />
            <p className="text-[18px] text-[#1874D1]">Message</p>
          </div>
          <img src={Close} alt="" className={!msgOpen?"hidden":"w-[24px] h-[24px]"} onClick={()=>{setMsgOpen(false)}}/>
        </div>
        {/* <div> */}
        <div className=" h-full p-2 flex flex-col gap-2 overflow-y-auto scroll-smooth">
          {messages.map((message) => {
            return (
              <div ref={scrollRef} key={message}>
                <div
                  className={
                    !message.fromSelf
                      ? "flex flex-col justify-start"
                      : "flex flex-col items-end"
                  }
                >
                  <p
                    className={!msgInfo ? "hidden" : "text-[12px] text-center"}
                  >
                    2:30 PM
                  </p>
                  <p
                    className="border-black border rounded max-w-[40%] break-words p-1"
                    onClick={() => {
                      setMsgInfo(!msgInfo);
                    }}
                  >
                    {message.message}
                  </p>
                  <p className={!msgInfo ? "hidden" : "text-[12px]"}>Seen</p>
                </div>
              </div>
            );
          })}
        </div>
        <form className="flex px-2">
          <input
            type="text"
            placeholder=" Enter Message"
            value={msg}
            onChange={(e) => {
              setMsg(e.target.value);
            }}
            className="w-full caret-pink-500 accent-pink-500"
          />
          <button
            className="border border-blue-400 text-blue-400 px-2"
            onClick={(e) => {
              handleSendMsg(msg);
              e.preventDefault();
            }}
          >
            <img src={Send} alt="" />
          </button>
        </form>
      </div>
      {/* </div> */}
      {/* End of Chat */}
    </div>
  );
};

export default Chat;
