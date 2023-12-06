import React, { useState } from "react";
import FormComponent from "./components/FormComponent";
import ListComponent from "./components/ListComponent";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState([]);

  const handleSearch = async () => {
    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      if (!userResponse.ok) {
        throw new Error("Network response error");
      }
      const userData = await userResponse.json();
      setUserData(userData);

      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      if (!reposResponse.ok) {
        throw new Error("Network response error");
      }
      const userRepos = await reposResponse.json();
      setUserRepos(userRepos);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <FormComponent onSubmit={handleSearch} setUsername={setUsername} />

        <ListComponent userData={userData} userRepos={userRepos} username={username} />
      </div>
    </div>
  );
};

export default App;
