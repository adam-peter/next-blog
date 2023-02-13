"use client";

import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({email}),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      }
    })
    console.log("done");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="text-black"
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
