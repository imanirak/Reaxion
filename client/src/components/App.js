import UpdateUserProfile from "./UserProfile/UserProfileUpdate";
import CommunityCreate from "./Community/CommunityCreate";
import Register from "./Register";
import Login from "./Login";
import Logout from "./Logout";
import CommunityJoin from "./Community/CommunityJoin";
import PostCreate from "./Posts/PostCreate"
import NavBar from './NavBar';
import Home from "../pages/HomePage";
function App() {

  return (
    <div className="App">
      <NavBar />
      
      {/* < UpdateUserProfile/> */}
      <h1>Reaxion</h1>
      <Home />
      {/* <CommunityCreate />
      <Register />
      <Login />
      <Logout />
      <CommunityJoin />
      <PostCreate /> */}
    </div>
  );
}

export default App;
