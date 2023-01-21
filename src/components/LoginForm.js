import {useState} from 'react'
import axios from 'axios';

export default function LoginForm() {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [error, setError] = useState(''); // if some wrong credential is given

 const handleSubmit = async (e) => {
  e.preventDefault();
  const authObject = { "Project-ID": "3ced9fd9-eea3-4846-b44e-ddadf7fcaabc", 'User-Name' : username, 'User-Secret': password };
  
  try{
   // if username | password correct==> chatengine give messages
   await axios.get('https://api.chatengine.io/chats', {headers: authObject});
   // works--> logged in
   localStorage.setItem('username', username); // store the password to local storage
   localStorage.setItem('password', password); // user don't need to login every time

   window.location.reload(); // to render something, like if not logged in show login form
   setError('');

  } catch (error){
   // else error
   setError(
     <div
       style={{
         alignItems: "center",
         justifyContent: "center",
         color: "#380312",
       }}
     >
       <h5>Please, enter valid credentials</h5>
     </div>
   );
  }
 }

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title"> Chat Room</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required // input must be filled
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span> Start Chatting</span>
            </button>
          </div>
          <h2 className="error"> {error} </h2>
        </form>
      </div>
    </div>
  );
}
