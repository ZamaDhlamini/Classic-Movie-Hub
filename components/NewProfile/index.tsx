import React, { useState } from "react";
import { ProfileProps } from "../Profile";

interface NewProfileProps {
  onAddProfile: (profile: ProfileProps) => void;
}

const NewProfile: React.FC<NewProfileProps> = ({ onAddProfile }) => {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    

    
    const newProfile: ProfileProps = {
      name,
      picture,
      
    };

    
    onAddProfile(newProfile);

   
    setName("");
    setPicture("");
  };

  return (
    <div>
      <h2>Add New Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Picture URL:
          <input
            type="text"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Profile</button>
      </form>
    </div>
  );
};

export default NewProfile;
