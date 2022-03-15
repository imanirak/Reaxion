import UpdateUserProfile from "./UserProfile/UserProfileUpdate";
import CommunityCreate from "./Community/CommunityCreate";
import Register from "./Register";
import CommunityJoin from "./Community/CommunityJoin";
import PostCreate from "./Posts/PostCreate"

function App() {

  return (
    <div className="App">
     < UpdateUserProfile/>
      <h1>Reaxion</h1>
      <CommunityCreate />
      <Register />
      <CommunityJoin />
      <PostCreate />
    </div>
  );
}

export default App;
