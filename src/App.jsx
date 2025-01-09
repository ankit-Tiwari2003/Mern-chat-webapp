import axios from "axios";
import { UserContextProvider } from "./UserContext";
import Routes from "./Routes";

function App() {
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'https://mern-chat-api-ecm2.onrender.com';
  // if (process.env.NODE_ENV === 'development') {
  //   axios.defaults.baseURL = 'http://localhost:4040';
  // } else {
  //   axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  // }

  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
}

export default App;