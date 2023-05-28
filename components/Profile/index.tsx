import React from "react";

export interface ProfileProps {
  name: string;
  picture: string;
  // Add any other profile details as needed
}

const Profile: React.FC<ProfileProps> = ({ name, picture }) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={picture} alt={name} />
      {/* Add other profile details */}
    </div>
  );
};

export default Profile;
