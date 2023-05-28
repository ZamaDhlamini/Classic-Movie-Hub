import React, { useState } from "react";
import Profiles from "../../components/Profiles";
import NewProfile from "../../components/NewProfile";

interface Profile {
  name: string;
  picture: string;
}

const ProfilePage: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  const handleAddProfile = (profile: Profile) => {
    setProfiles((prevProfiles) => [...prevProfiles, profile]);
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <Profiles profiles={profiles} />
      <NewProfile onAddProfile={handleAddProfile} />
    </div>
  );
};

export default ProfilePage;
