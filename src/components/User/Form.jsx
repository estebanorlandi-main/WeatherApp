import React, { useState } from "react";
import validate from "../../utility/validate";

export default function Form() {
  const [input, setInput] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setErrors(validate({ ...input, [e.target.name]: e.target.value }));
  };

  return (
    <form>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          onChange={handleInput}
          value={username}
        />
        {errors.username && <p>{errors.username}</p>}

        <label>Password:</label>
        <input
          type="password"
          name="password"
          onChange={handleInput}
          value={password}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
    </form>
  );
}
