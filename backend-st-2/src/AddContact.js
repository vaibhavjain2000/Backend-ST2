import React, { useState } from "react";
import "./AddContact.css";
import Button from "./components/Button";
import Input from "./components/Input";
import axios from "axios";

function AddContact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleAddContact = async () => {
    if (name && phone.length === 10 && email) {
      const obj = {
        name: name,
        mobile: phone,
        email: email,
      };
      await axios.post("http://localhost:3001/contacts", obj);
      window.alert("Contact added!");
    }
  };

  const handlePhoneNumber = (e) => {
    const num = e.target.value;
    if (num.length <= 10) {
      setPhone(num);
    }
  };

  return (
    <div className="addContact">
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        type="text"
      />
      <Input
        value={phone}
        onChange={handlePhoneNumber}
        placeholder="Phone"
        type="number"
      />
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
      />
      <Button onClick={handleAddContact} />
    </div>
  );
}

export default AddContact;
