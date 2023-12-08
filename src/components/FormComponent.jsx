import React, { useState } from "react";
import { Button } from "react-bootstrap";

const FormComponent = ({ onSubmit, setUsername }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(inputValue);
    onSubmit();
    setInputValue("");
  };

  return (
    <div className="text-center mt-5">
      <h2 style={{ color: "white" }}>GITHUB USER SEARCH</h2>
      <div className="row justify-content-center mt-3">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3 mt-3">
              <input type="text" className="form-control mx-1" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter username" />
              <div className="input-group-append">
                <Button type="submit" variant="secondary">
                  Search
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
