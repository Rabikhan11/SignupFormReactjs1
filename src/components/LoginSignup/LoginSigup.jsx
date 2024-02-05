

import React, { useState } from "react";
import "./LoginSignup.css";
import icon from "../assets/icon.png";

export const LoginSignup = () => {
  const [input, setInput] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    Gender: "",
    DoB: "",
    Course: "",
    Color: "#18054d",
    Phone: "",
    Country: "",
  });

  const inputHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInput({
      ...input,
      [name]: value,
    });

    console.log(name, ":", value);
  };

  const handleColorChange = (e) => {
    const colorValue = e.target.value;
    setInput({
      ...input,
      Color: colorValue,
    });
  };

  const handleSubmit = () => {
    console.log("Form data submitted:", input);

    // Clear the form after submission
    setInput({
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      Gender: "",
      DoB: "",
      Course: "",
      Color: "#18054d",
      Phone: "",
      Country: "",
    });
  };

  const handleReset = () => {
    // Reset the form
    setInput({
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      Gender: "",
      DoB: "",
      Course: "",
      Color: "#18054d",
      Phone: "",
      Country: "",
    });
  };

  return (
    <div className="container">
      <div className="header">
        <div className="icon">
          <img src={icon} alt="" height={70} width={70} />
        </div>

        <div className="Text">Sign Up Form</div>
        <div className="form">
          <div className="F-name">
            <label> FirstName:</label>
            <input
              type="text"
              name="FirstName"
              required
              value={input.FirstName}
              onChange={inputHandler}
            />
          </div>

          <div className="L-name">
            <label> LastName:</label>
            <input
              type="text"
              name="LastName"
              required
              value={input.LastName}
              onChange={inputHandler}
            />
          </div>

          <div className="Email">
            <label>Email:</label>
            <input
              type="email"
              name="Email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Enter a valid email address"
              value={input.Email}
              onChange={inputHandler}
            />
          </div>

          <div className="Password">
            <label> Password:</label>
            <input
              type="password"
              name="Password"
              required
              value={input.Password}
              onChange={inputHandler}
            />
          </div>

          <div className="Gender">
            <label id="m-f"> Gender: </label>
            <label>
              Female
              <input
                type="checkbox"
                name="Gender"
                value="female"
                checked={input.Gender === "female"}
                onChange={inputHandler}
              />
            </label>
            <label id="Male">
              Male
              <input
                type="checkbox"
                name="Gender"
                value="male"
                checked={input.Gender === "male"}
                onChange={inputHandler}
              />
            </label>
          </div>

          <div className="Date">
            <label> DoB: </label>
            <input
              type="date"
              name="DoB"
              value={input.DoB}
              onChange={inputHandler}
            />
          </div>

          <div className="course">
            <label id="dev">Course:</label>
            <label>
              Web dev 1
              <input
                type="radio"
                name="Course"
                value="Web dev 1"
                onChange={inputHandler}
                checked={input.Course === "Web dev 1"}
              />
            </label>
            <label className="dev2">
              Web dev 2
              <input
                type="radio"
                name="Course"
                value="Web dev 2"
                onChange={inputHandler}
                checked={input.Course === "Web dev 2"}
              />
            </label>
          </div>

          <div className="Number">
            <label>Phone:</label>
            <input
              type="number"
              name="Phone"
              id=""
              value={input.Phone}
              onChange={inputHandler}
            />
          </div>

          <div className="Color">
            <label id="c-picker">Color:</label>
            <input type="color" value={input.Color} onChange={handleColorChange} />
          </div>

          <div className="country">
            <label>Country:</label>
            <select
              name="Country"
              id="main"
              onChange={inputHandler}
              value={input.Country}
            >
              <option value="">Select a country</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
            </select>
          </div>

          <div className="submit">
            <button id="f-submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
