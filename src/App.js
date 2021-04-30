import { useState, useEffect } from "react";
import { 
  Application,
  Navbar,
} from "./styledApp";

const App = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);

  return (
    <Application>
      <Navbar>Github Search</Navbar>
    </Application>
  );
};

export default App;
