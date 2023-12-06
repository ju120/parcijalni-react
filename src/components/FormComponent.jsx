import React, { useState } from "react";

const FormComponent = ({ onSubmit, setUsername }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(inputValue);
    onSubmit();
    setInputValue("");
  };

  return (
    <div>
      <h2>Form Component</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter username" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default FormComponent;
