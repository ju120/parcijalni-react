import React, { useState, useEffect } from "react";
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
      const fetchedUserData = await userResponse.json();
      setUserData(fetchedUserData);

      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      if (!reposResponse.ok) {
        throw new Error("Network response error");
      }
      const fetchedUserRepos = await reposResponse.json();
      setUserRepos(fetchedUserRepos);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    if (username.trim() !== "") {
      handleSearch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  const handleReset = () => {
    setUsername("");
    setUserData(null);
    setUserRepos([]);
  };
  return (
    <div className="App">
      <div className="container">
        <FormComponent onSubmit={handleSearch} setUsername={setUsername} />
        <ListComponent userData={userData} userRepos={userRepos} username={username} handleReset={handleReset} />
      </div>
    </div>
  );
};

export default App;
