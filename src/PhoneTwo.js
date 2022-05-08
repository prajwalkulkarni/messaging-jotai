import "./styles.css";
import { useAtom } from "jotai";
import { useEffect, useRef } from "react";
import { messageAtom } from "./App";
export default function PhoneTwo(props) {
  const [, setMessageVal] = useAtom(messageAtom);

  const divref = useRef(null);
  // console.log(props.messages)

  const messageVal = useRef();
  const sendMessageHandler = () => {
    if (messageVal.current.value) {
      setMessageVal((prev) => [
        ...prev,
        { sender: "p2", content: messageVal.current.value }
      ]);
      messageVal.current.value = "";
    }
  };

  useEffect(() => {
    const domNode = divref.current;
    // if (domNode) {
    //   domNode.scrollTop = domNode.scrollHeight;
    // }
    if (domNode) {
      domNode.scrollTo({
        behavior: "smooth",
        top: domNode.scrollHeight
      });
    }
  }, [props.messages]);

  return (
    <div className="phone">
      <div className="statusbar">
        <p style={{ paddingLeft: "10px" }}>Jio</p>
        <div className="status">
          <p>
            <svg
              class="svg-icon"
              style={{
                width: "1em",
                height: "1em",
                "vertical-align": "middle",
                fill: "black",
                overflow: "hidden"
              }}
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M512 192c-163 0-326 67.2-443 176.6-6.6 6-6.8 16.2-0.6 22.8l53.4 55.8c6.2 6.6 16.6 6.8 23.2 0.6 46.6-43.2 99.8-77.6 158.6-102 66-27.6 136.2-41.4 208.6-41.4s142.6 14 208.6 41.4c58.8 24.6 112 58.8 158.6 102 6.6 6.2 17 6 23.2-0.6l53.4-55.8c6.2-6.4 6-16.6-0.6-22.8C838 259.2 675 192 512 192z" />
              <path d="M226.4 555l57.2 56.6c6.2 6 16 6.4 22.4 0.6 56.6-50.2 129.2-77.8 205.8-77.8s149.2 27.4 205.8 77.8c6.4 5.8 16.2 5.4 22.4-0.6l57.2-56.6c6.6-6.6 6.4-17.2-0.6-23.4-75-67.8-175.2-109.2-285-109.2s-210 41.4-285 109.2c-6.6 6.2-6.8 16.8-0.2 23.4zM512 648.4c-46.8 0-89.2 19.6-118.8 51-6 6.4-5.8 16.2 0.4 22.4l106.8 105.4c6.4 6.4 16.8 6.4 23.2 0l106.8-105.4c6.2-6.2 6.4-16 0.4-22.4-29.6-31.2-72-51-118.8-51z" />
            </svg>
          </p>
          <p>
            <svg
              class="svg-icon"
              style={{
                width: "1em",
                height: "1em",
                "vertical-align": "middle",
                fill: "currentColor",
                overflow: "hidden"
              }}
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M792 288H128c-52.8 0-96 43.2-96 96v256c0 52.8 43.2 96 96 96h664c52.8 0 96-43.2 96-96V384c0-52.8-43.2-96-96-96z m40 352c0 22-18 40-40 40H128c-22 0-40-18-40-40V384c0-22 18-40 40-40h664c22 0 40 18 40 40v256z m96-230.8v205.6c32 0 64-55.4 64-102.8s-32-102.8-64-102.8z" />
              <path d="M768 384H152c-13.2 0-24 10.8-24 24v208c0 13.2 10.8 24 24 24h616c13.2 0 24-10.8 24-24V408c0-13.2-10.8-24-24-24z" />
            </svg>
          </p>
        </div>
      </div>
      <div className="messages" ref={divref}>
        {props.messages.map((message) => {
          if (message.sender === "p2") {
            return (
              <div key={Math.random()} className="send">
                {message.content}
              </div>
            );
          } else {
            return (
              <div className="receive" key={Math.random()}>
                {message.content}
              </div>
            );
          }
        })}
      </div>
      <div className="bottombar">
        <input
          ref={messageVal}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              sendMessageHandler();
            }
          }}
          type="text"
          placeholder="Message..."
        />
        <span onClick={sendMessageHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            x="0"
            y="0"
            class="svg-icon"
            style={{
              width: "1.5em",
              height: "1.2em",
              "vertical-align": "middle",
              fill: "#1982FC",
              overflow: "hidden"
            }}
            version="1.1"
            viewBox="0 0 29 29"
          >
            <path d="M14.5 2C7.596 2 2 7.596 2 14.5S7.596 27 14.5 27 27 21.404 27 14.5 21.404 2 14.5 2zm5.707 10.707a.997.997 0 0 1-1.414 0L15.5 9.414V22a1 1 0 1 1-2 0V9.414l-3.293 3.293a.999.999 0 1 1-1.414-1.414l5-5a.999.999 0 0 1 1.414 0l5 5a.999.999 0 0 1 0 1.414z" />
          </svg>
        </span>
      </div>
    </div>
  );
}
