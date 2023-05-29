import React, { useState } from "react";
import Profiles from "../../components/Profiles";
import NewProfile from "../../components/NewProfile";
import { useRouter } from "next/router";


interface Profile {
  name: string;
  picture: string;
}

const ProfilePage: React.FC = () => {
  const router = useRouter();
  const [profiles, setProfiles] = useState<Profile[]>([]);

  const handleAddProfile = (profile: Profile) => {
    setProfiles((prevProfiles) => [...prevProfiles, profile]);
    router.push(`/users/${profile.name}`);
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
