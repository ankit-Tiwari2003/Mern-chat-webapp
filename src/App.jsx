import axios from "axios";
import { UserContextProvider } from "./UserContext";
import Routes from "./Routes";

function App() {
  axios.defaults.withCredentials = true;

  if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = 'http://localhost:4040';
  } else {
    axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  }

  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
}

export default App;