import {ChatEngine} from "react-chat-engine";
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from "./components/LoginForm";


function App() {
  if(!localStorage.getItem('username')) return <LoginForm />
  
  return (
    <ChatEngine
      height="100vh"
      projectID="3ced9fd9-eea3-4846-b44e-ddadf7fcaabc"
      userName= {localStorage.getItem('username')}
      userSecret= {localStorage.getItem('password')} // password
      renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
