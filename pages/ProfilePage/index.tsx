import React, { useState } from "react";
import Profiles from "../../components/Profiles";
import NewProfile from "../../components/NewProfile";
import { useRouter } from "next/router";
import Home from "../Home";


interface Profile {
  name: string;
  picture: string;
}

const ProfilePage: React.FC = () => {
  const router = useRouter();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  const handleAddProfile = (profile: Profile) => {
    setProfiles((prevProfiles) => [...prevProfiles, profile]);
    router.push(`/users/${profile.name}`);
  };

  const handleProfileSelect = (profile: Profile) => {
    setSelectedProfile(profile);
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
