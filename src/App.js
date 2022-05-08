import "./styles.css";
import PhoneOne from "./PhoneOne";
import PhoneTwo from "./PhoneTwo";
import { atom, useAtom } from "jotai";

export const messageAtom = atom([
  { sender: "p1", content: "Hello" },
  { sender: "p2", content: "Whats up" }
]);
export default function App() {
  const [messages] = useAtom(messageAtom);

  // setMessages(prev=>[...prev,])

  return (
    <div className="App">
      <PhoneOne messages={messages} />
      <PhoneTwo messages={messages} />
    </div>
  );
}
