import React from "react";
import Profile, { ProfileProps } from "../Profile";

interface ProfilesProps {
  profiles: ProfileProps[];
}

const Profiles: React.FC<ProfilesProps> = ({ profiles }) => {
  return (
    <div>
      {profiles.map((profile) => (
        <Profile
          key={profile.name}
          name={profile.name}
          picture={profile.picture}
          // Pass other profile details as needed
        />
      ))}
    </div>
  );
};

export default Profiles;
